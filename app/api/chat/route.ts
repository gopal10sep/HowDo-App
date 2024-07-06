import { streamText } from 'ai';
import { google } from '@ai-sdk/google';
import { streamUI } from "ai/rsc";
import { Pinecone } from "@pinecone-database/pinecone";
import { embed } from 'ai';
import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const pineconeKey = process.env.PINECONE_API_KEY;
const googleApiKey = process.env.GOOGLE_API_KEY;
const indexName = process.env.PINECONE_INDEX;
const SYSTEM_PROMPT_PATH = path.join(process.cwd(), 'prompts/howdorag.txt');

export const maxDuration = 30;
export const genAI = new GoogleGenerativeAI(googleApiKey);

export async function POST(req: Request) {
  const { messages } = await req.json();
  const lastMessage = messages[messages.length - 1].content;


  const pinecone = new Pinecone({ apiKey: pineconeKey });
  const pineconeIndex = pinecone.index(indexName!);

  const model = genAI.getGenerativeModel({ model: "text-embedding-004" });
  const res = await model.embedContent(lastMessage);
  const embedding = res.embedding;

  const similarityResponse = await pineconeIndex.query({
    topK: 3,
    vector: embedding.values,
    includeValues: true,
    includeMetadata: true,
  });

  // Extract scores and metadata from matches
  const matches = similarityResponse.matches;
  const fetchedContextArray = matches.map(match => ({
    score: match.score,
    metadata: match.metadata,
  }));

  // Convert fetched context to a string
  const fetchedContext = fetchedContextArray.map(item => JSON.stringify(item)).join('\n');

  const SYSTEM_TEMPLATE = fs.readFileSync(SYSTEM_PROMPT_PATH, 'utf-8');
  // Combine system template with fetched context
  const SYSTEM_PROMPT_COMPLETE = `${SYSTEM_TEMPLATE}\n\n${fetchedContext}`;

  const result = await streamText({
    model: google('models/gemini-1.5-flash'),
    messages: [
      { role: 'system', content: SYSTEM_PROMPT_COMPLETE },
      { role: 'assistant', content: 'Sure, ready to help always. Ask me the question!' },
      { role: 'user', content: lastMessage },
    ],
  });

  return result.toAIStreamResponse();
}
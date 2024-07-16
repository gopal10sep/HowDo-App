# HowDo-App

**HowDo-App** is a Retrieval Augmented Generation (RAG) application that provides answers based on the masterclass lessons available on the HowDo website. This app leverages the power of advanced AI models for query understanding and response generation, ensuring accurate and contextually relevant answers.

## Architecture

![HowDo-App Architecture](https://imgur.com/0028F0a.png)

## Features

- **Authentication**: Managed by [ClerkJS](https://clerk.dev/), ensuring secure login and session management.
- **AI Chat Interface**: An intuitive interface for users to interact with the AI model.

## Models and Technologies Used

- **Large Language Model (LLM)**: [Google Gemini 1.5 Flash](https://ai.google/tools/gemini/).
- **Embedding Model**: [Google text-embedding-004](https://ai.google/tools/text-embedding-004).
- **Vector Database**: [Pinecone](https://www.pinecone.io/).
- **Hosting**: [Vercel](https://vercel.com/).

## Data Storage and Retrieval

### Information Storage

1. **Scraping**: HowDo Masterclass lessons are scraped and processed.
2. **Chunking**: The scraped text is chunked using `RecursiveCharacterTextSplitter` with parameters `chunk_size=512` and `chunk_overlap=100`.
3. **Vectorization**: The chunks are vectorized using Google text-embedding-004 model.
4. **Storage**: Vectors are stored in Pinecone's vector database.

### Query Processing

1. **Query Vectorization**: The user's question is converted into a vector.
2. **Vector Search**: The vector is searched in the vector database to find the top 3 most relevant matches.
3. **Context Addition**: The top 3 matches are added to the prompt as context.
4. **Answer Generation**: The context-enriched prompt is sent to the Google Gemini 1.5 Flash model to generate an answer.
5. **Formatting**: The generated answer is formatted and citations are added.

## Setup and Deployment

### Prerequisites

- Node.js
- ClerkJS Account
- Pinecone Account
- Google Cloud Account with access to Gemini 1.5 Flash and text-embedding-004 models
- Vercel Account

### Installation

1. **Clone the repository**:
    ```sh
    git clone https://github.com/yourusername/howdo-app.git
    cd howdo-app
    ```

2. **Install dependencies**:
    ```sh
    npm install
    ```

3. **Configure Environment Variables**:
    - Create a `.env` file in the root directory.
    - Add the necessary API keys and configuration details.

    ```env
    CLERK_API_KEY=your_clerk_api_key
    PINECONE_API_KEY=your_pinecone_api_key
    GOOGLE_API_KEY=your_google_api_key
    ```

4. **Run the Application**:
    ```sh
    npm run dev
    ```

### Deployment

1. **Deploy to Vercel**:
    - Push your code to a GitHub repository.
    - Connect your repository to Vercel.
    - Deploy the application via Vercel's dashboard.

## Contributing

We welcome contributions to enhance the HowDo-App. Please fork the repository and create a pull request with your changes.

## License

This project is licensed under the MIT License.

## Acknowledgments

- [ClerkJS](https://clerk.dev/)
- [Google AI](https://ai.google/)
- [Pinecone](https://www.pinecone.io/)
- [Vercel](https://vercel.com/)

---

For more details, refer to the architecture diagram above.

import React from 'react';
import { Button } from "@/components/ui/button"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet"
import { Textarea } from "@/components/ui/textarea"
import Link from "next/link"
import { SignedIn, SignedOut, UserButton, RedirectToSignIn } from '@clerk/nextjs'


interface ChatProps {
  messages: Array<{
    id: string;
    role: 'user' | 'assistant' | 'system' | 'function' | 'data' | 'tool';
    content: string;
    createdAt?: Date | string;
  }>;
  input: string;
  handleInputChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  handleSubmit: () => void;
}

interface IconProps extends React.SVGProps<SVGSVGElement> {
  // You can add any additional props here if needed
}

export function Chat({ messages, input, handleInputChange, handleSubmit }: ChatProps) {
  return (
    <>
      <SignedIn>
        <div className="flex flex-col h-screen">
          <header className="sticky top-0 z-10 flex items-center justify-between bg-gradient-to-r from-[#0000DB] to-[#0000DB]/50 px-4 py-3 text-white">
            <div className="flex items-center gap-2 font-['Inter']">
              <div className="font-black text-2xl">HowDo.Ai</div>
              <div className="text-xs font-medium">Revolutionizing innovation</div>
            </div>
            <div className="flex items-center gap-4">
              <SignedIn>
                <UserButton />
              </SignedIn>
              <Button variant="outline" className="rounded-md px-4 py-2 text-[#0000DB] bg-white font-['Inter']">
                Get Premium
              </Button>
            </div>
          </header>
          <div className="flex flex-1 overflow-hidden">
            <div className="bg-gradient-to-b from-[#0000DB] to-[#0000DB]/50 text-white hidden lg:flex flex-col font-['Inter'] w-56">
              <Button
                variant="ghost"
                className="flex items-center justify-start gap-2 px-4 py-3 hover:bg-white hover:text-[#0000DB]"
              >
                <HomeIcon className="h-5 w-5 hover:text-[#0000DB]" />
                Home Page
              </Button>
              <Button
                variant="ghost"
                className="flex items-center justify-start gap-2 px-4 py-3 hover:bg-white hover:text-[#0000DB]"
              >
                <UsersIcon className="h-5 w-5 hover:text-[#0000DB]" />
                Communities
              </Button>

              <Link href="/chat">
                <Button
                  variant="ghost"
                  className="flex items-center justify-start gap-2 px-4 py-3 bg-white text-[#0000DB]"
                >
                  <MessageCircleIcon className="h-5 w-5 hover:text-[#0000DB]" />
                  AI Chat
                </Button>
              </Link>
              <Link href="/">
                <Button
                  variant="ghost"
                  className="flex items-center justify-start gap-2 px-4 py-3 hover:bg-white hover:text-[#0000DB]"
                >
                  <BotIcon className="h-5 w-5 hover:text-[#0000DB]" />
                  AI Avatars
                </Button>
              </Link>
              <Button
                variant="ghost"
                className="flex items-center justify-start gap-2 px-4 py-3 hover:bg-white hover:text-[#0000DB]"
              >
                <BookIcon className="h-5 w-5 hover:text-[#0000DB]" />
                Submit Knowledge
              </Button>
            </div>
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  className="flex items-center justify-start gap-2 px-4 py-3 hover:bg-[#0000DB]/80 lg:hidden"
                >
                  <MenuIcon className="h-5 w-5" />
                  <span className="sr-only">Toggle navigation</span>
                </Button>
              </SheetTrigger>
              <SheetContent
                side="left"
                className="bg-gradient-to-b from-[#0000DB] to-[#0000DB]/50 text-white lg:hidden font-['Inter']"
              >
                <Button
                  variant="ghost"
                  className="flex items-center justify-start gap-2 px-4 py-3 hover:bg-white hover:text-[#0000DB]"
                >
                  <HomeIcon className="h-5 w-5 hover:text-[#0000DB]" />
                  Home Page
                </Button>
                <Button
                  variant="ghost"
                  className="flex items-center justify-start gap-2 px-4 py-3 hover:bg-white hover:text-[#0000DB]"
                >
                  <UsersIcon className="h-5 w-5 hover:text-[#0000DB]" />
                  Communities
                </Button>
                <Button
                  variant="ghost"
                  className="flex items-center justify-start gap-2 px-4 py-3 hover:bg-white hover:text-[#0000DB]"
                >
                  <MessageCircleIcon className="h-5 w-5 hover:text-[#0000DB]" />
                  AI Chat
                </Button>
                <Button
                  variant="ghost"
                  className="flex items-center justify-start gap-2 px-4 py-3 hover:bg-white hover:text-[#0000DB]"
                >
                  <BotIcon className="h-5 w-5 hover:text-[#0000DB]" />
                  AI Avatars
                </Button>
                <Button
                  variant="ghost"
                  className="flex items-center justify-start gap-2 px-4 py-3 hover:bg-white hover:text-[#0000DB]"
                >
                  <BookIcon className="h-5 w-5 hover:text-[#0000DB]" />
                  Submit Knowledge
                </Button>
              </SheetContent>
            </Sheet>
            <div className="flex flex-1 flex-col bg-white overflow-auto">
              <div className="flex-1 p-6">
              {messages.map((m) => (
                <div key={m.id} className="flex items-start gap-4 mt-6">
                  <Avatar className="h-10 w-10 border">
                    <AvatarImage src="/placeholder-user.jpg" />
                    <AvatarFallback>
                      {m.role === 'user' ? 'U' : 
                      m.role === 'assistant' ? 'AI' : 
                      m.role.charAt(0).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                  <div className="grid gap-1">
                    <div className="flex items-center gap-2">
                      <div className="font-bold">
                        {m.role === 'user' ? 'You' : 
                        m.role === 'assistant' ? 'HowDo.ai' : 
                        m.role.charAt(0).toUpperCase() + m.role.slice(1)}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {new Date().toLocaleTimeString()}
                      </div>
                    </div>
                    <div>
                      {m.content.includes('<') && m.content.includes('>') ? (
                        <div className="citations" dangerouslySetInnerHTML={{ __html: m.content }} />
                      ) : (
                        <p>{m.content}</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
              </div>
              <div className="max-w-2xl w-full sticky bottom-0 mx-auto py-2 flex flex-col gap-1.5 px-4 bg-white">
                <div className="relative">
                  <Textarea
                      placeholder="Type your message..."
                      name="message"
                      id="message"
                      rows={1}
                      className="min-h-[48px] rounded-2xl resize-none p-4 border border-neutral-400 shadow-sm pr-16 font-['Inter']"
                      value={input} 
                      onChange={handleInputChange} 
                      onKeyDown={(e) => { 
                        if (e.key === "Enter") {
                          e.preventDefault();
                          handleSubmit();
                        }
                      }}
                    />
                    <Button 
                      type="submit" 
                      size="icon" 
                      className="absolute w-8 h-8 top-3 right-3" 
                      onClick={handleSubmit}
                    >
                    <ArrowUpIcon className="w-4 h-4" />
                    <span className="sr-only">Send</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </>
  )
}


function ArrowUpIcon(props: IconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m5 12 7-7 7 7" />
      <path d="M12 19V5" />
    </svg>
  )
}

function BookIcon(props: IconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
    </svg>
  )
}

function BotIcon(props: IconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 8V4H8" />
      <rect width="16" height="12" x="4" y="8" rx="2" />
      <path d="M2 14h2" />
      <path d="M20 14h2" />
      <path d="M15 13v2" />
      <path d="M9 13v2" />
    </svg>
  )
}

function HomeIcon(props: IconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  )
}

function MenuIcon(props: IconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}

function MessageCircleIcon(props: IconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
    </svg>
  )
}

function UsersIcon(props: IconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}
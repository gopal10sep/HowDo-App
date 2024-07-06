"use client";

import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Landing() {
  return (
      <div className="flex flex-col min-h-[100dvh]">
        <header className="px-4 lg:px-6 h-14 flex items-center bg-background">
          <Link href="#" className="flex items-center justify-center" prefetch={false}>
            <MountainIcon className="h-6 w-6" />
            <span className="sr-only">HowDo.AI</span>
          </Link>
          <nav className="ml-auto flex gap-4 sm:gap-6">
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
              Features
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
              Pricing
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
              About
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
              Contact
            </Link>
            <SignedIn>
              <UserButton />
            </SignedIn>
            <SignedOut>
              <Link href="/sign-in" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
                Log In
              </Link>
              <Link href="/sign-up" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
                Try Now
              </Link>
            </SignedOut>
          </nav>
        </header>
        <main className="flex-1">
          <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-[rgb(0,0,219)] to-[rgb(0,0,219,0.5)]">
            <div className="container px-4 md:px-6 text-white">
              <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
                <div className="flex flex-col justify-center space-y-4">
                  <div className="space-y-2">
                    <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                      HowDo.ai: Your Guide to Business Evolution
                    </h1>
                    <p className="max-w-[600px] text-white/80 md:text-xl">
                      HowDo.AI provides AI-driven guidance to empower innovators, encourage continuous learning, support
                      strategic decision-making, and foster resilience for your business.
                    </p>
                  </div>
                  <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <div>
                    <SignedIn>
                      <Link
                        href="/chat"
                        className="inline-flex h-10 items-center justify-center rounded-md bg-white px-8 text-sm font-medium text-[rgb(0,0,219)] shadow transition-colors hover:bg-white/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                        prefetch={false}
                      >
                        Go to App
                      </Link>
                    </SignedIn>
                    <SignedOut>
                      <>
                        <Link
                          href="/sign-up"
                          className="inline-flex h-10 items-center justify-center rounded-md bg-white px-8 text-sm font-medium text-[rgb(0,0,219)] shadow transition-colors hover:bg-white/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                          prefetch={false}
                        >
                          Try Now
                        </Link> &nbsp;&nbsp;&nbsp;&nbsp;
                        <Link
                          href="/sign-in"
                          className="inline-flex h-10 items-center justify-center rounded-md border border-white bg-transparent px-8 text-sm font-medium text-white shadow-sm transition-colors hover:bg-white/20 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                          prefetch={false}
                        >
                          Log In
                        </Link>
                      </>
                    </SignedOut>
                  </div>
                  </div>
                </div>
                <img
                  src="/placeholder.svg"
                  width="550"
                  height="550"
                  alt="Hero"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
                />
              </div>
            </div>
          </section>
          <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm text-[rgb(0,0,219)]">
                    Key Benefits
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Empower Your Business with HowDo.AI</h2>
                  <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    HowDo.AI provides AI-driven guidance to empower innovators, encourage continuous learning, support
                    strategic decision-making, and foster resilience for your business.
                  </p>
                </div>
              </div>
              <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
                <img
                  src="/placeholder.svg"
                  width="550"
                  height="310"
                  alt="Image"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                />
                <div className="flex flex-col justify-center space-y-4">
                  <ul className="grid gap-6">
                    <li>
                      <div className="grid gap-1">
                        <h3 className="text-xl font-bold">Empower Innovators</h3>
                        <p className="text-muted-foreground">
                          HowDo.AI provides AI-driven insights to help your team identify new opportunities and drive
                          innovation.
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="grid gap-1">
                        <h3 className="text-xl font-bold">Encourage Continuous Learning</h3>
                        <p className="text-muted-foreground">
                          Our platform fosters a culture of learning and adaptation, empowering your team to stay ahead of
                          the curve.
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="grid gap-1">
                        <h3 className="text-xl font-bold">Support Strategic Decision-Making</h3>
                        <p className="text-muted-foreground">
                          HowDo.AI provides data-driven insights to help you make informed decisions that drive your
                          business forward.
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="grid gap-1">
                        <h3 className="text-xl font-bold">Foster Resilience</h3>
                        <p className="text-muted-foreground">
                          Our platform helps you anticipate and adapt to market changes, enabling your business to thrive
                          in any environment.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
          <section className="w-full py-12 md:py-24 lg:py-32 border-t">
            <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
              <div className="space-y-3">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Experience the Power of HowDo.AI
                </h2>
                <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Unlock your business's full potential with the guidance of HowDo.AI. Get started today and see the
                  difference it can make.
                </p>
              </div>
              <div className="mx-auto w-full max-w-sm space-y-2">
                <div>
                      <SignedIn>
                            <Link href="/chat">
                              <Button type="submit" className="bg-[rgb(0,0,219)] text-white hover:bg-[rgb(0,0,219,0.9)]">
                                Go to App
                              </Button>
                            </Link>
                        <p className="text-xs text-muted-foreground">
                          Goto the app to experience the power of HowDo.AI.{" "} <br />
                          <Link href="#" className="underline underline-offset-2" prefetch={false}>
                            Terms &amp; Conditions
                          </Link>
                        </p>

                      </SignedIn>
                      <SignedOut>
                        <>
                          <Link href="/sign-up">
                            <Button type="submit" className="bg-[rgb(0,0,219)] text-white hover:bg-[rgb(0,0,219,0.9)]">
                              Try Now
                            </Button>
                          </Link>
                        <p className="text-xs text-muted-foreground">
                          Sign up to experience the power of HowDo.AI.{" "} <br />
                          <Link href="#" className="underline underline-offset-2" prefetch={false}>
                            Terms &amp; Conditions
                          </Link>
                        </p>
                        </>
                      </SignedOut>
                    </div>

              </div>
            </div>
          </section>
        </main>
        <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
          <p className="text-xs text-muted-foreground">&copy; 2024 HowDo.AI. All rights reserved.</p>
          <nav className="sm:ml-auto flex gap-4 sm:gap-6">
            <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
              Terms of Service
            </Link>
            <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
              Privacy
            </Link>
          </nav>
        </footer>
      </div>

  )
}

function MountainIcon(props) {
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
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}

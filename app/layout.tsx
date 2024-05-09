import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ClerkProvider, SignIn, SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'

const IBMPlex = IBM_Plex_Sans({
   subsets: ["latin"],
   weight: ['400', '500', '600', '700'],
   variable: '--font-ibm-plex'
  });

export const metadata: Metadata = {
  title: "AImage",
  description: "Image Generator and Editor powered by AI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    {/*
      appearance={{
        layout: {
          logoImageUrl: '/public/images/logo-text.svg'
        }
      }}>
    */}
      <html lang="en">
        <body className={cn("font-IBMPlex antialiased", IBMPlex.variable)}>
          <header>
            {/*
            <SignedOut>
              <SignInButton/>
            </SignedOut>
            */}

            {/* allows user to view profile info*/}
            {/*
            <SignedIn>
              <UserButton/>
            </SignedIn>
            */}
          </header>
          <main>
            {children}
          </main>
        </body>
      </html>
    </ClerkProvider>
  );
}

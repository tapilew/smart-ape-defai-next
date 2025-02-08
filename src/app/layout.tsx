import "@coinbase/onchainkit/styles.css";
import "~/styles/globals.css";
import type { Metadata } from "next";
import { Providers } from "~/lib/providers";
import { Header } from "~/components/header";
import { Footer } from "~/components/footer";
import { PromptBar } from "~/components/prompt-bar";
import { ChatMessages } from "~/components/chat-messages";
import { cn } from "~/lib/utils";
import { GeistSans } from "geist/font/sans";

export const metadata: Metadata = {
  title: "Smart Ape | DeFAI Agent",
  description: "Generated by create-t3-app",
  icons: [{ rel: "icon", url: "/ape.png" }],
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("min-h-screen antialiased", GeistSans.className)}>
        <Providers>
          <div className="relative flex min-h-screen flex-col">
            <Header />
            <div className="flex flex-1 flex-row pt-[72px]">
              <div className="flex h-[calc(100vh-120px)] w-[320px] flex-col">
                <ChatMessages />
              </div>
              {children}
            </div>
            <PromptBar className="absolute bottom-[48px]" />
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}

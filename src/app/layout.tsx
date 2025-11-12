import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NoteAI/prototype/sahrulmubarrok",
  description: "AI-powered notepad application with integrated assistant for enhanced productivity.",
  keywords: ["NoteAI", "AI Notepad", "TypeScript", "Tailwind CSS", "shadcn/ui", "AI assistant", "React"],
  authors: [{ name: "sahrulmubarrok" }],
  icons: {
    icon: "https://z-cdn.chatglm.cn/z-ai/static/logo.svg",
  },
  openGraph: {
    title: "NoteAI/prototype/sahrulmubarrok",
    description: "AI-powered notepad application with integrated assistant",
    url: "https://chat.z.ai",
    siteName: "NoteAI",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NoteAI/prototype/sahrulmubarrok",
    description: "AI-powered notepad application with integrated assistant",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}

import { Providers } from "./components";
import "./globals.css";
import { Inter } from "@next/font/google";
import { cn } from "@/lib/utils";
import { Toaster } from "./components/ui/toast";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />

      <body
        className={cn("bg-slate-100 antialiased text-black min-h-screen", inter.className)}
      >
        <Providers>
          <Toaster position="bottom-left" />
          {children}
        </Providers>
      </body>
    </html>
  );
}

import { Footer, Navbar } from "@/app/components";
import "@/app/globals.css"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />

      {/* @ts-expect-error Server Component */}
      <Navbar />
      <div className="pt-16">{children}</div>
      <Footer />
    </>
  );
}
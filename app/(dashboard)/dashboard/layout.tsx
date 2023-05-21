import { SideBar } from "@/app/components";
import "@/app/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // offset navbar height

  return (
    <>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <div className="pt-16">
        <SideBar>{children}</SideBar>
      </div>
    </>
  );
}

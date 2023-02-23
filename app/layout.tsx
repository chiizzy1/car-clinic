import { Footer, Navbar } from "./components";
import "./globals.css";
import style from "../style";

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
      <body className="bg-primary w-full overflow-hidden">
        <div className={`${style.paddingX} ${style.flexCenter}`}>
          <div className={`${style.boxWidth}`}>
            <Navbar />
          </div>
        </div>

        <div className={`bg-primary ${style.flexStart}`}>
          <div className={`${style.boxWidth}`}>{children}</div>
        </div>

        <div className={`bg-primary ${style.paddingX} ${style.flexCenter}`}>
          <div className={`${style.boxWidth}`}>
            <Footer />
          </div>
        </div>
        
      </body>
    </html>
  );
}

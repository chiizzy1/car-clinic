import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../style";
import { About, Hero } from "./components";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main  className="bg-primary w-full overflow-hidden">
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <About />
        </div>
      </div>
    </main>
  );
}

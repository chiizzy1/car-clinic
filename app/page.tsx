import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../style";
import { About, Gallery, Hero, Services, Testimonial } from "./components";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main  className={`${inter.className} bg-gray-50 w-full overflow-hidden`}>
      <div className={`bg-gray-50 ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      <div className={`bg-gray-50 ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <About />
          <Services />
          <Testimonial />
          <Gallery />
        </div>
      </div>

    </main>
  );
}

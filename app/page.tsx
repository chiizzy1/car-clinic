import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../style";
import { About, Gallery, Hero, Services, Testimonial } from "./components";



export default function Home() {
  return (
    <main  className={` bg-white w-full overflow-hidden`}>
      <div className={`bg-white ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      <div className={`bg-white ${styles.paddingX} ${styles.flexCenter}`}>
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

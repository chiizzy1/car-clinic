import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../style";
import { Hero, Services, Testimonial } from "./components";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main  className="bg-gray-50 w-full overflow-hidden">
      <div className={`bg-gray-50 ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      <div className={`bg-gray-50 ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Services />
          {/* <Services />
          <Testimonial /> */}
        </div>
      </div>

    </main>
  );
}

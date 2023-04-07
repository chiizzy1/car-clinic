import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../style";
import { About, Gallery, Hero, Services, Testimonial } from "./components";



export default function Home() {
  return (
    <main  className={`relative flex items-center justify-center `}>
      <div className=" pt-[5rem] max-w-7xl w-full mx-auto">
        <Hero />
        <About />
        <Services />
        <Gallery />
      </div>
    </main>
  );
}

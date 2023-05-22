import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../style";
import {
  About,
  Gallery,
  Hero,
  Services,
  Testimonial,
  Navbar,
  Footer,
} from "./components";

export default function Home() {
  return (
    <div className={``}>
      {/* @ts-expect-error Server Component */}
      <Navbar />
      <div className=" mt-[4rem] max-w-7xl w-full mx-auto">
        <Hero />
        <About />
        <Services />
        <Testimonial />
        <Gallery />
      </div>
      <Footer />
    </div>
  );
}

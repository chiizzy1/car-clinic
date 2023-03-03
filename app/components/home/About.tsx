import styles, { layout } from "../../../style";
import Image from "next/image";
import { about_image } from "@/assets";

const About = () => (
  <section
    id="features"
    className={`${styles.paddingY} ${styles.paddingX} grid gap-16 grid-cols-fluid`}
  >
    <div className={`h-96 `}>
      <Image
        src={about_image}
        alt="mechanic"
        width={800}
        height={800}
        className="rounded"
      />
    </div>
    <div className="">
      <div className={`flex flex-col`}>
        <h2 className={styles.heading2}>About Us</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Welcome to Car Clinic, your one-stop-shop for auto repair and
          maintenance. Our skilled technicians use state-of-the-art diagnostic
          tools to quickly identify and fix any issues with your vehicle, while
          providing you with high-quality service at competitive prices. Trust
          us to keep your vehicle running smoothly and safely on the road.
        </p>
      </div>
    </div>
  </section>
);

export default About;

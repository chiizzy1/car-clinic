import styles from "../../../style";
import { discount, hero_bg, robot } from "../../../assets";
import Image from "next/image";

const Hero = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col w-full h-screen bg-center  ${styles.paddingY} bg-[url('https://images.pexels.com/photos/4489749/pexels-photo-4489749.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')]`}>
      <div className={`h-screen w-full`}>
        {/* <Image src={hero_bg} alt="workshop" className="w-full h-full object-cover absolute "/> */}

        <div className={`${styles.paddingX} ${styles.paragraph}`}>
          <h1>Car Clinic</h1>
          <p className=" text-red-500 max-w-[470px]">Welcome to Car Clinic, your one-stop-shop for auto repair and maintenance. Our skilled technicians use state-of-the-art diagnostic tools to quickly identify and fix any issues with your vehicle, while providing you with high-quality service at competitive prices. Trust us to </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
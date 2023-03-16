import styles from "@/style";


const Hero = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col w-full h-[33rem] bg-center ${styles.paddingY} bg-no-repeat bg-[url('https://themesfamily.com/tm/wasi/assets/img/slider/1.jpg')]`}>

        <div className={`${styles.paddingX}`}>
          <h1 className={`text-dimPurple  font-poppins font-semibold ss:text-[72px] text-[52px] ss:leading-[100.8px] leading-[75px]`}>Car Clinic</h1>
          <p className={`max-w-[470px] font-poppins tracking-wide font-medium text-black text-lg leading-[30.8px]`} >Welcome to Car Clinic, your one-stop-shop for auto repair and maintenance. Our skilled technicians use state-of-the-art diagnostic tools to quickly identify and fix any issues with your vehicle, while providing you with high-quality service at competitive prices. Trust
          us to keep your vehicle running smoothly and safely on the road.</p>
          <div className={`flex pt-6`}>
            <button className="bg-dimPurple text-white rounded-md py-2 px-6">Book Appointment</button>
            <button className="bg-dimPurple text-white rounded-md py-2 px-6 ml-4">Welcome</button>
          </div>
        </div>

    </section>
  );
};

export default Hero;
import styles from "@/style";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="sm:pb-16 pb-6">
      {/* <div className="relative min-h-screen ">
        
        <div className=' w-full '>
            <Image
              priority
              className='img-shadow '
              quality={100}
              style={{ objectFit: 'cover' }}
              fill
              src='https://images.pexels.com/photos/919073/pexels-photo-919073.jpeg?auto=compress&cs=tinysrgb&w=600'
              alt='hero_bg'
            />
        </div>
        <div className={`container absolute max-w-7xl mx-auto mt-12`}>
          <h1 className="text-3xl font-bold text-white">Your one-stop shop{' '}</h1> <br />
          <p className=" max-w-md text-yellow-400 text-base">Car Clinic is  for reliable and efficient automobile repairs and maintenance. Our team of expert mechanics uses state-of-the-art equipment to diagnose and fix any issues with your vehicle. Trust us to keep your car running smoothly and safely.</p>
          
        </div>
      </div> */}

      <div className="hero min-h-screen" style={{ backgroundImage: `url("https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=600")` }}>
        <div className="hero-overlay bg-opacity-80"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Car Clinic</h1>
            <p className="mb-5">Car Clinic is  for reliable and efficient automobile repairs and maintenance. Our team of expert mechanics uses state-of-the-art equipment to diagnose and fix any issues with your vehicle. Trust us to keep your car running smoothly and safely.</p>
            <button className="btn btn-primary">Book Appointment</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

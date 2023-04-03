import styles from "@/style"
import Image from "next/image"

const About = () => (
    <section>
        <div className="sm:flex items-center shadow-md mt-10">
    <div className="w-full">
      <Image className="bg-cover" src="https://images.pexels.com/photos/1429775/pexels-photo-1429775.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="img" width={400} height={400} />
    </div>
    <div className="md:px-10 sh sm:px-5 w-full">
      <p>At our automobile workshop, we provide high-quality repairs and maintenance services to keep your vehicle in top condition. Our team of experienced mechanics has the skills and expertise to handle any repair, from minor issues like oil changes and tire rotations to major engine overhauls.

We understand how important your vehicle is to your daily life, which is why we are committed to providing fast, efficient service that gets you back on the road as quickly as possible. We use only the best parts and equipment to ensure your vehicle runs smoothly and safely.</p>
    </div>
  </div>
    </section>
)

export default About
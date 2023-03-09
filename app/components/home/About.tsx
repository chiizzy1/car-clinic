import styles from "@/style"
import Image from "next/image"

const About = () => (
    <section>
        <div className="sm:flex items-center shadow-md mt-10">
    <div className="w-full">
      <Image className="bg-cover" src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="img" width={400} height={400} />
    </div>
    <div className="md:px-10 sh sm:px-5 w-full">
      <h1 className="text-gray-800 font-bold text-2xl my-2">long established</h1>
      <p className="text-gray-700 mb-2 md:mb-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that....</p>
      <div className="flex justify-between mb-2">
        <span className="font-thin text-sm">May 20th 2020</span>
        <span className="sm:block hidden mb-2 text-gray-800 font-bold">Read more</span>
      </div>
    </div>
  </div>
    </section>
)

export default About
import { done, four, one, three, two } from "@/assets";
import Image from "next/image";
import { FC } from "react";
import { CgLoadbar } from "react-icons/cg";

const page = () => {
  return (
    <main className="relative flex items-center justify-center">
      <section className="container max-w-7xl mx-auto">
        <h1 className="font-bold">TRACKING PAGE</h1>

        <div className="flex items-center justify-between">
          <div className="flex gap-4">
            <div className="flex flex-col">
              <Image src={one} width={30} height={30} alt="icon" />
              <p className="text-sm text-black font-medium">Vehicle Check-In</p>
            </div>
            <div className="bg-green-500 h-1 w-24" />
          </div>
          <div className="flex gap-4">
            <div className="flex flex-col">
              <Image src={two} width={30} height={30} alt="icon" />
              <p className="text-sm text-black font-medium">
                Repair in Progress
              </p>
            </div>
            <div className="bg-green-500 h-1 w-24" />
          </div>
          <div className="flex gap-4">
            <div className="flex flex-col">
              <Image src={three} width={30} height={30} alt="icon" />
              <p className="text-sm text-black font-medium">
                Vehicle Ready for Pick-up
              </p>
            </div>
            <div className="bg-green-500 h-1 w-24" />
          </div>
          <div className="flex gap-4">
            <div className="flex flex-col">
              <Image src={four} width={30} height={30} alt="icon" />
              <p className="text-sm text-black font-medium">Delivered</p>
            </div>
            <div className="bg-green-500 h-1 w-24" />
          </div>
          <div className="flex gap-4">
            <div className="flex flex-col">
              <Image src={done} width={30} height={30} alt="icon" />
              <p className="text-sm text-black font-medium">Delivered</p>
            </div>
            {/* <div className="bg-green-500 h-1 w-24" /> */}
          </div>
        </div>
      </section>
    </main>
  );
};

export default page;

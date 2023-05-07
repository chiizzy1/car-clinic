import { buttonVariants, Table } from "@/app/components";
import { done, four, one, three, two } from "@/assets";
import Image from "next/image";
import { FC } from "react";
import { CgLoadbar } from "react-icons/cg";

const info = [
  {
    id: 1,
    carId: 1,
    description: "Engine tune-up",
    estimatedCost: 300,
    status: "In Progress",
  },
];

const page = () => {
  return (
    <main className="relative flex items-center justify-center">
      <div className="sm:py-16 py-6 w-full">
        <div className="container max-w-7xl mx-auto">
          <h3 className="text-2xl text-dimPurple font-bold sm:pb-9 pb-6 w-full text-center">
            TRACKING PAGE
          </h3>

          <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start items-center sm:py-9 py-6">
            {/* <span className="block text-sm font-medium text-slate-700">Social Security Number</span> */}
            <input
              className="input border border-dimPurple w-4/5 bg-transparent"
              placeholder="enter tracking id"
            />
            <button className="btn bg-dimPurple w-1/5">Search</button>
          </div>

          <Table info={info} />

          <div className="flex gap-4 md:flex-row flex-col">
            <div className="w-full flex items-center justify-between sm:py-9 py-6">
              <div className="flex items-center gap-4">
                <div className="flex flex-col">
                  <Image src={done} width={30} height={30} alt="icon" />
                  <p className="text-sm text-black font-medium">
                    Vehicle Check-In
                  </p>
                </div>
                {/* <div className="bg-green-500 h-1 w-24" /> */}
              </div>
              <div className="flex items-center gap-4">
                <div className="flex flex-col">
                  <Image src={two} width={30} height={30} alt="icon" />
                  <p className="text-sm text-black font-medium">
                    Repair in Progress
                  </p>
                </div>
                {/* <div className="bg-green-500 h-1 w-24" /> */}
              </div>
              <div className="flex items-center gap-4">
                <div className="flex flex-col">
                  <Image src={three} width={30} height={30} alt="icon" />
                  <p className="text-sm text-black font-medium">
                    Vehicle Ready for Pick-up
                  </p>
                </div>
                {/* <div className="bg-green-500 h-1 w-24" /> */}
              </div>
              <div className="flex items-center gap-4">
                <div className="flex flex-col">
                  <Image src={four} width={30} height={30} alt="icon" />
                  <p className="text-sm text-black font-medium">Delivered</p>
                </div>
                {/* <div className="bg-green-500 h-1 w-24" /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default page;

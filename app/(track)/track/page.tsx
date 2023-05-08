import { buttonVariants, Table, TrackUI } from "@/app/components";
import FAQ from "@/app/components/Track/FAQ";
import { customerCare } from "@/assets";
import Image from "next/image";

const info = [
  {
    id: 1,
    carId: 1,
    description: "Engine tune-up",
    estimatedCost: 300,
    status: "Check-In",
  },
];

const page = () => {
  return (
    <main className="relative flex items-center justify-center">
      <div className="sm:py-16 py-6 w-full">
        <div className="container max-w-7xl mx-auto">
          <h3 className="text-2xl text-dimPurple font-bold sm:pb-9 pb-6 w-full text-center">
            TRACK YOUR CAR
          </h3>

          <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start items-center sm:py-9 py-6">
            {/* <span className="block text-sm font-medium text-slate-700">Social Security Number</span> */}
            <input
              className="input border border-dimPurple w-4/5 bg-transparent"
              placeholder="enter tracking id..."
            />
            <button className="btn bg-dimPurple w-1/5">Track</button>
          </div>

          {/* <FAQ /> */}

          <h4 className="text-dimPurple font-bold sm:py-9 py-6 w-full text-center">Car Info</h4>
          <Table info={info} />

          <div className="flex gap-8 sm:flex-row flex-col sm:py-9 py-6">
            <div className="w-full rounded-md bg-green-100 p-6">
            <h4 className="font-semibold text-center">Car Repair Status</h4>
              <TrackUI status={info[0].status} />
            </div>

            <div className="w-full bg-sky-200 border rounded-md p-6">
              <h4 className="font-semibold text-center">Not Satisfied?</h4>
              <div className="flex items-center justify-center sm:py-9 py-6">
                <div className="rounded-full overflow-hidden">
                  <Image
                    src={customerCare}
                    alt="customer care"
                    width={100}
                    height={100}
                  />
                </div>
                <p className="text-[.8rem] ml-8">
                  Have any Complaints!
                  <br /> Our agents are always online 24/7 to attent to you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default page;

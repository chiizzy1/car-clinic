import { buttonVariants, Table, TrackUI } from "@/app/components";


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
            <TrackUI status={info[0].status} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default page;

import { buttonVariants, Table, TrackUI } from "@/app/components";
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
            TRACKING PAGE
          </h3>

          <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start items-center sm:py-9 py-6">
            {/* <span className="block text-sm font-medium text-slate-700">Social Security Number</span> */}
            <input
              className="input border border-dimPurple w-4/5 bg-transparent"
              placeholder="enter tracking id..."
            />
            <button className="btn bg-dimPurple w-1/5">Search</button>
          </div>

          <div className="bg-sky-200 rounded-lg sm:py-9 py-6">
            <h3 className="text-2xl text-dimPurple font-bold sm:pb-9 pb-6 w-full text-center ">
              FAQs
            </h3>

            <div className="flex flex-col gap-4 justify-center items-center">
              <div className="max-w-3xl">
                <h4 className="text-2xl font-medium text-black my-4 text-center">
                  What is tracking id?
                </h4>
                <p>
                  A tracking ID is a unique code assigned to your car repair at
                  Car Clinic. It allows you to monitor the progress of your
                  repair, providing real-time updates on its status. With the
                  tracking ID, you can stay informed about the various stages of
                  the repair process, from scheduling to completion. It ensures
                  transparency and allows you to anticipate when your car will
                  be ready for pickup.
                </p>
              </div>

              <div className="max-w-3xl">
                <h4 className="text-2xl font-medium text-center text-black my-4">
                  How do I get a tracking id?
                </h4>
                <ul>
                  <li>
                    <strong>1{" "}Schedule your repair:</strong> Contact Car Clinic to book an
                    appointment for your car repair. Provide them with the
                    necessary details about your vehicle and the repair
                    required.
                  </li>

                  <li>
                  <strong>2{" "}Receive the tracking ID: </strong> Once your repair appointment is
                    confirmed, Car Clinic will assign a unique tracking ID to
                    your repair order. This ID serves as a reference for
                    tracking the progress of your repair.
                  </li>

                  
                </ul>
              </div>

              <div className="max-w-3xl">
                <h4 className="text-2xl font-medium text-center text-black my-4">
                  Forgot your ID?
                </h4>
                <p>Follow these simple steps to retrieve your tracking ID:</p>

                <ul>
                  <li>
                  <strong>1{" "}Contact Car Clinic:</strong> Reach out to the Car Clinic customer
                    support team through their provided contact information.
                    Explain that you have forgotten your tracking ID and would
                    like assistance in retrieving it.
                  </li>

                  <li>
                  <strong>2{" "}Provide necessary information:</strong> Car Clinic will ask for
                    specific details to verify your identity and retrieve your
                    tracking ID. Be prepared to provide information such as your
                    name, contact details, and any relevant information about
                    your car repair, such as the appointment date or service
                    requested.
                  </li>

                  <li>
                  <strong>3{" "} Assistance from customer support:</strong> Car Clinic's customer
                    support team will assist you in retrieving your tracking ID.
                    They may ask additional questions to verify your identity
                    and locate your repair order in their system.
                  </li>

                  <li>
                  <strong>4{" "}Receive your tracking ID:</strong> Once your identity is verified,
                    Car Clinic will provide you with your tracking ID.{" "}
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* <Table info={info} />

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
          </div> */}
        </div>
      </div>
    </main>
  );
};

export default page;

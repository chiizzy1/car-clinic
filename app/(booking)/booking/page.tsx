import { BookingForm } from "@/app/components";
import { FC } from "react";

const page: FC = ({}) => {
  return (
    <main className="relative flex items-center justify-center">
      <div className="sm:py-16 py-6 w-full">
        <div className="container max-w-7xl mx-auto">

        <h3 className="text-2xl text-dimPurple font-bold sm:pb-9 pb-6 w-full text-center">
            Book an Appointment
          </h3>

          <BookingForm />
        </div>
      </div>
    </main>
  );
};

export default page;

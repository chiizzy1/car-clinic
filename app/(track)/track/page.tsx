import { done, four, one, three, two } from "@/assets";
import Image from "next/image";
import { FC } from "react";
import { CgLoadbar } from "react-icons/cg";

const page = () => {
  return (
    <main className="relative flex items-center justify-center">
      <div className="sm:py-16 py-6 w-full">
        <div className="container max-w-7xl mx-auto">
          <h3 className="text-2xl text-dimPurple font-bold sm:pb-9 pb-6 w-full text-center">
            TRACKING PAGE
          </h3>

          <div className="flex">
            <table className="w-full">
              <tr className="flex justify-between">
                <th>Order ID</th>
                <th>Customer</th>
                <th>Address</th>
                <th>Total</th>
              </tr>
              <tr className="flex justify-between">
                <td>
                  <span>129837819237</span>
                </td>
                <td>
                  <span>John Doe</span>
                </td>
                <td>
                  <span>Elton st. 212-33 LA</span>
                </td>
                <td>
                  <span>$79.80</span>
                </td>
              </tr>
            </table>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="flex flex-col">
                <Image src={done} width={30} height={30} alt="icon" />
                <p className="text-sm text-black font-medium">
                  Vehicle Check-In
                </p>
              </div>
              <div className="bg-green-500 h-1 w-24" />
            </div>
            <div className="flex items-center gap-4">
              <div className="flex flex-col">
                <Image src={two} width={30} height={30} alt="icon" />
                <p className="text-sm text-black font-medium">
                  Repair in Progress
                </p>
              </div>
              <div className="bg-green-500 h-1 w-24" />
            </div>
            <div className="flex items-center gap-4">
              <div className="flex flex-col">
                <Image src={three} width={30} height={30} alt="icon" />
                <p className="text-sm text-black font-medium">
                  Vehicle Ready for Pick-up
                </p>
              </div>
              <div className="bg-green-500 h-1 w-24" />
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
    </main>
  );
};

export default page;

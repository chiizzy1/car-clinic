import { Customer } from "@prisma/client";
import Link from "next/link";
import { FC } from "react";
import CarsTable from "./CarsTable";
import CustomerCard from "./CustomerCard";
import CustomerTransactionHistory from "./CustomerTransactionHistory";
import RepairsTable from "./RepairsTable";
import StatsCard from "./StatsCard";

interface TestProps {
  data: Customer;
  customerId: string
}

const Test: FC<TestProps> = ({ data, customerId}) => {
    
    // console.log(data)

    const {cars,repairs}: any = data

    console.log("cars:", cars);
    console.log("carsRepairs:", repairs);


  // add SN to Cars array
    
    let customerCars: [] = [];

  if (cars) {
    customerCars = cars.map((info: any, i: number) => {
      return {
        ...info,
        sn: i + 1,
      };
    });
  }


  // add SN to repairs array
  let repairsData: [] = [];

  if (repairs) {
    repairsData = repairs.map((info: any, i: number) => {
      return {
        ...info,
        sn: i + 1,
      };
    });
  }

    
  return (
    <div>
      Test bruhjk
      <div className=" grid md:grid-cols-3 grid-cols-1 gap-4">
        <CustomerCard />
        <StatsCard />
        <div className="bg-white shadow-lg border p-4 rounded-lg">
            <Link href={`dashboard/customers/${customerId}/cars/newcar`}>Add New Car</Link>
            {/* <Link href={`dashbaord/customers/${customerId}/cars`}>View all cars</Link> */}
        </div>
      </div>

      <div className="pt-8">
        <h3 className="text-xl font-medium pb-4 sm: text-center">
          {data && data.firstName} Transaction History
        </h3>
      {/* <CustomerTransactionHistory customerId="ertywuikx" /> */}
      </div>
      <h3 className="text-bold text-xl text-black py-6 text-center">All Customer Cars</h3>

      {customerCars && <CarsTable cars={customerCars} customerId={customerId} />}
      <h3 className="text-bold text-xl text-black py-6 text-center">Customer Repair History</h3>
      {repairsData && <RepairsTable repairs={repairsData} customerId={customerId} />}
    </div>
  );
};

export default Test;

import { Customer } from "@prisma/client";
import { FC } from "react";
import CustomerCard from "./CustomerCard";
import CustomerTransactionHistory from "./CustomerTransactionHistory";
import StatsCard from "./StatsCard";

interface TestProps {
  data: Customer;
}

const Test: FC<TestProps> = ({ data }) => {
    
    console.log(data)

    
  return (
    <div>
      Test bruhjk
      <div className=" grid md:grid-cols-3 grid-cols-1 gap-4">
        <CustomerCard />
        <StatsCard />
      </div>

      <div className="pt-8">
        <h3 className="text-xl font-medium pb-4 sm: text-center">
          {data && data.firstName} Transaction History
        </h3>
      <CustomerTransactionHistory customerId="ertywuikx" /></div>
    </div>
  );
};

export default Test;

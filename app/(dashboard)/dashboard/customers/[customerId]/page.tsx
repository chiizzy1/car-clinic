import {
  CustomerCard,
  CustomerTransactionHistory,
  StatsCard,
} from "@/app/components";
import { FC } from "react";






const Customer = async ({ params }: any) => {
  const { customerId } = params

  
  return (
    <div className="p-4">
      <div className=" grid md:grid-cols-3 grid-cols-1 gap-4">
        <CustomerCard />
        <StatsCard />
      </div>
      <div className="pt-8">
        <h3 className="text-xl font-medium pb-4 sm: text-center">{customerId} Transaction History</h3>
        <CustomerTransactionHistory customerId={customerId} />
      </div>
    </div>
  );
};

export default Customer;

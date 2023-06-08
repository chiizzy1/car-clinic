

import { FC } from "react";
import {
  CustomerCard,
  CustomerTransactionHistory,
  StatsCard,
} from "@/app/components";

interface ClientProps {
  customerId: string;
}

const Client: FC<ClientProps> = ({ customerId }) => {

  
  return (
    <div>
      <div className=" grid md:grid-cols-3 grid-cols-1 gap-4">
        <CustomerCard />
        <StatsCard />
      </div>
      <div className="pt-8">
        <h3 className="text-xl font-medium pb-4 sm: text-center">
          {customerId} Transaction History
        </h3>
        <CustomerTransactionHistory customerId={customerId} />
      </div>
    </div>
  );
};

export default Client;

import { CustomersTable, Header } from "@/app/components";
import { data } from "@/constants";
import { FC } from "react";
import { BsPersonFill, BsThreeDotsVertical } from "react-icons/bs";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container max-w-7xl mx-auto">
        <Header />
        
        <CustomersTable />
      </div>
    </div>
  );
};

export default page;

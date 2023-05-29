import { CustomersTable, Header } from "@/app/components";
import { data } from "@/constants";
import { FC } from "react";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container max-w-7xl mx-auto">
        <Header />
        <div className="scrollbar-thin scrollbar-thumb-gray-900 scrollbar-track-gray-100">
          <CustomersTable />
        </div>
      </div>
    </div>
  );
};

export default page;

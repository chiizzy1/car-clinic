import { FC } from "react";
import {
  BarChart,
  Header,
  RecentOrders,
  TopCards,
  TransactionsTable,
} from "@/app/components";


interface pageProps {}



const page: FC<pageProps> = ({}) => {
  return (
    <main className="bg-gray-100 min-h-screen">
      <div className="container max-w-7xl mx-auto">
        <Header />
        <TopCards />
        <div className="p-4 grid md:grid-cols-3 grid-cols-1 gap-4">
          <BarChart />
          <RecentOrders />
        </div>
        <div className="p-4">
          <TransactionsTable />
        </div>
      </div>
    </main>
  );
};

export default page;

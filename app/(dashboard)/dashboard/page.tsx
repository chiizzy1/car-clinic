import { BarChart, RecentOrders, TopCards } from "@/app/components";
import { FC } from "react";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <main className="relative flex items-center justify-center">
      <section className="container max-w-7xl mx-auto">
        <main className="bg-gray-100 min-h-screen">
          <TopCards />
          <div className="p-4 grid md:grid-cols-3 grid-cols-1 gap-4">
            <BarChart />
            <RecentOrders />
          </div>
        </main>
      </section>
    </main>
  );
};

export default page;

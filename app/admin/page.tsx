import React from "react";
import { BarChart, RecentOrders } from "../components";

import Header from "../components/dashboard/Header";
import SideBar from "../components/dashboard/SideBar";
import TopCards from "../components/dashboard/TopCards";

const Admin = () => {
  return (
    <main className="bg-gray-100 min-h-screen">
      {/* <Header /> */}
      <TopCards />
        <div className='p-4 grid md:grid-cols-3 grid-cols-1 gap-4'>
          <BarChart />
          <RecentOrders />
        </div>
    </main>
  );
};

export default Admin;
 
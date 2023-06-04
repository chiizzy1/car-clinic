import {
  BarChart,
  Header,
  RecentOrders,
  TopCards,
  TransactionsTable,
} from "@/app/components";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { notFound } from "next/navigation";
import { redirect } from 'next/navigation';



const page = async () => {
  const user = await getServerSession(authOptions);
  if (!user) return notFound()
console.log(user)
  // if (!user) {
  //   redirect("/login")
  // };

  // if (user && user.user.role !== "AUTHORIZED") {
  //   redirect("/");
  // }

  return (
    <main className="bg-gray-100 min-h-screen">
      <div className="container max-w-7xl mx-auto">
       {user.user.name && <Header name={user.user?.name} />}
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

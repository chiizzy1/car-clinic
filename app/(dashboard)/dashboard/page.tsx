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
import DashboardCards from "@/app/components/dashboard/DashboardCards";



const page = async () => {
  const user = await getServerSession(authOptions);
  if (!user) return notFound()
console.log(user.user)
  // if (!user) {
  //   redirect("/login")
  // };

  // if (user && user.user.role !== "AUTHORIZED") {
  //   redirect("/");
  // }

  return (
    <main className="bg-gray-100 min-h-screen">
      <div className="container max-w-7xl mx-auto">
       {user.user.name && <Header name={user.user?.name} id={user.user.id} />}
        <DashboardCards />
      </div>
    </main>
  );
};

export default page;

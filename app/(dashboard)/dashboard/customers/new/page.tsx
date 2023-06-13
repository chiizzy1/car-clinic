import { Header, NewCustomer } from "@/app/components";
import Mock from "@/app/components/dashboard/Mock";
import SearchCustomer from "@/app/components/dashboard/SearchCustomer";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";

export default async function CustomerPage() {
  const session = await getServerSession(authOptions);
  const user = session?.user;
  
  return (
    <div>
      {user?.name && <Header name={user?.name} id={user.id} />}
      <div className="pt-8">
        <h3 className="text-lg font-medium">Register new customer!</h3>
        {/* <NewCustomer /> */}
        <Mock />
      </div>
    </div>
  );
}

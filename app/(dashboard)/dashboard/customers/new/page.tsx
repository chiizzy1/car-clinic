import { Header, NewCustomer } from "@/app/components";
import SearchCustomer from "@/app/components/dashboard/SearchCustomer";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";

export default async function CustomerPage() {
  const user = await getServerSession(authOptions).then(res => res?.user);

  return (
    <div>
      {user?.name && <Header name={user?.name} />}
      <div className="pt-8">
        <h3 className="text-lg font-medium">Register new customer!</h3>
        <NewCustomer />
      </div>
    </div>
  );
}

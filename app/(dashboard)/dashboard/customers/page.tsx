import { GetAllCustomers, Header } from "@/app/components";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";

const page = async () => {
  const user = await getServerSession(authOptions).then((res) => res?.user);

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container max-w-7xl mx-auto">
        {user?.name && <Header name={user?.name} />}
        <GetAllCustomers />
      </div>
    </div>
  );
};

export default page;

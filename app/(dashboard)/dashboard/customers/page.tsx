import { CustomersTable, Header } from "@/app/components";
import { data } from "@/constants";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { FC } from "react";
import { BsPersonFill, BsThreeDotsVertical } from "react-icons/bs";



const page  = async () => {
  const user = await getServerSession(authOptions).then(res => res?.user);

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container max-w-7xl mx-auto">
        {user?.name && <Header name={user?.name} />}
        
        <CustomersTable />
      </div>
    </div>
  );
};

export default page;

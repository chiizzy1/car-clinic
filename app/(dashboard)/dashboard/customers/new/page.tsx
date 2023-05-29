"use client"

import { Header, NewCustomer } from "@/app/components";
import {  useState } from "react";



export default function CustomerPage () {
  const [toggle, settoggle] = useState(false)
  return (
    <div>
      <Header />
      <div className="pt-8">
        {!toggle && (<div>
          <h3 className="text-lg font-medium">Retrieve existing Customer info!</h3>
        </div>)}
        <h3 className="text-lg font-medium">create new customer</h3>
        <NewCustomer />
      </div>
    </div>
  );
};


"use client";

import CreateRepairModal from "@/app/components/dashboard/CreateRepairModal";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";

type URL = {
  params: {
    customerId: string;
    carId: string;
  };
  searchParams: string;
};


export default function CarDetail(url: URL) {
  const { customerId, carId } = url.params;


  const [toggleModal, setToggleModal] = useState<boolean>(false);


  
  return (
    <div>
      dynamic car details fetch customer ID:{" "}
      <p className="font-bold text-2xl text-black">{customerId}</p> , car ID :{" "}
      <p className="font-bold text-2xl text-black">{carId}</p>{" "}

      <div className="flex gap-6">
        <div onClick={()=>setToggleModal(true)} className="rounded-lg bg-sky-300 text-black h-10 p-6 flex items-center justify-center">Add new repair details</div>
        <div className="rounded-lg bg-sky-300 text-black h-10 p-6 flex items-center justify-center">Bruhhh</div>
      </div>

      {toggleModal && <CreateRepairModal customerId={customerId} carId={carId} setToggleModal={setToggleModal} />}
    </div>
  );
}

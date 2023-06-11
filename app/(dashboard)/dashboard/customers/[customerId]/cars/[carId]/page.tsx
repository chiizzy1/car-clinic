"use client";

import CreateRepairModal from "@/app/components/dashboard/CreateRepairModal";
import SingleRepairTable from "@/app/components/dashboard/SingleRepairTable";
import { toast } from "@/app/components/ui/toast";
import { useMutation } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";

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
  const [repairData, setRepairData] = useState([]);

  const createNewCar: any = async (info: any) => {
    console.log(info);
    const { data } = await axios.post(`/api/repairs/getRepair`, info);
    return data.RepairData;
  };

  const { mutate, error, isLoading, isError } = useMutation(createNewCar, {
    onSuccess: (successData: []) => {
      console.log(successData);
      setRepairData(successData);
    },
    onError: (error) => {
      console.log(error);
    },
  });

  useEffect(() => {
    // Function to call on page load
    const getCarRepairs = (data: any) => {
      mutate(data);
      console.log(data);
    };

    getCarRepairs({ customerId, carId });
    // Call the function on page load
  }, []);

  // add SN to Cars array

  let repairs: any = [];

  if (repairData) {
    repairs = repairData.map((info: any, i: number) => {
      return {
        ...info,
        sn: i + 1,
      };
    });
  }

  return (
    <div>
      dynamic car details fetch customer ID:{" "}
      <p className="font-bold text-2xl text-black">{customerId}</p> , car ID :{" "}
      <p className="font-bold text-2xl text-black">{carId}</p>{" "}
      <div className="flex gap-6">
        <div
          onClick={() => setToggleModal(true)}
          className="rounded-lg bg-sky-300 text-black h-10 p-6 flex items-center justify-center"
        >
          Add new repair details
        </div>
        <div className="rounded-lg bg-sky-300 text-black h-10 p-6 flex items-center justify-center">
          getRepairs
        </div>
      </div>
      <SingleRepairTable repairs={repairs} />
      {toggleModal && (
        <CreateRepairModal
          customerId={customerId}
          carId={carId}
          setToggleModal={setToggleModal}
        />
      )}
    </div>
  );
}

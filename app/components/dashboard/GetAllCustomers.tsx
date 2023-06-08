"use client";

import { FC } from "react";
import { useQuery } from "@tanstack/react-query";
import { getAllCustomers } from "@/helpers/customers";
import { AxiosError } from "axios";
import CustomersTable from "./CustomersTable";

interface GetAllCustomersProps {}

const GetAllCustomers: FC<GetAllCustomersProps> = ({}) => {
  const { data, error, isError, isLoading } = useQuery(
    ["allCustomers"],
    getAllCustomers,
    {
      onSuccess: (successData) => {
        // console.log(successData);
      },
    }
  );

  if (isLoading) {
    return <h1> Loading...</h1>;
  }

  if (isError) {
    return <div>Error!</div>;
  }

  let customerData: [] = [];

  if (data) {
    customerData = data.map((info: any, i: number) => {
      return {
        ...info,
        sn: i + 1,
      };
    });
  }

  return (
    <div>
      <p>All Customers</p>
      {customerData && <CustomersTable data={customerData} />}
    </div>
  );
};

export default GetAllCustomers;

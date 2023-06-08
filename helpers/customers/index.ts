import { Customer } from "@prisma/client";
import axios from "axios";

export async function createNewCustomer(info: Customer) {
  return await axios.post("/api/customers/createNew", info);
}

export async function getAllCustomers() {
  const { data } = await axios.get("/api/customers/getAllCustomers");
  const {customerData} = data
  return customerData
}

export async function getCustomer({customerId}: any) {
  const { data } = await axios.get(`/api/customers/${customerId}`);
  const {customerData} = await data
  console.log(customerData)
  return customerData
}


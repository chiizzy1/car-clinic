import { Customer } from "@prisma/client";
import axios from "axios";

export async function createNewCustomer(info: Customer) {
  return await axios.post("/api/customers/createNew", info);
}

import { Customer } from "@prisma/client";
import { ZodIssue } from "zod";

export interface CreateNewCustomerData {
    error: string | ZodIssue[] | null
    customerData: Customer | null
}

export interface DeleteCustomerData {
    error: string | ZodIssue[] | null
    success: boolean
  }
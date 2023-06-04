import { Customer } from "@prisma/client";
import { ZodIssue } from "zod";

export interface CreateNewCustomerData {
    error: string | ZodIssue[] | null
    newCustomerData: Customer
}
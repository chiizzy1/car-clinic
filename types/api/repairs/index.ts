import { CarDetails, Customer, Repair } from "@prisma/client";
import { ZodIssue } from "zod";

export interface CreateNewRepairData {
  error: string | ZodIssue[] | null;
  RepairData: Repair | null;
}


export interface GetRepairData {
  error: string | ZodIssue[] | null;
  RepairData:  (Repair & { car: CarDetails; owner: Customer;})[] | null;
}

export interface GetAllRepairsData {
  error: string | ZodIssue[] | null;
  RepairData: (Repair & { car: CarDetails; owner: Customer; })[] | null;
}

export interface DeleteRepairData {
  error: string | ZodIssue[] | null;
  success: boolean;
}

export interface UpdateRepairData {
  error: string | ZodIssue[] | null;
  UpdatedRepairData: Repair | boolean;
}

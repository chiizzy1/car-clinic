import { CarDetails, Customer, Repair } from "@prisma/client";
import { ZodIssue } from "zod";

export interface CreateNewRepairData {
  error: string | ZodIssue[] | null;
  RepairData: Repair | null;
}

export type allRepairData = {
  id: string;
  description: string;
  estimatedCost: number;
  trackId: string;
  paid: boolean;
  fixed: boolean;
  car: CarDetails;
  carId: string;
  owner: Customer;
  finishDate: Date | null;
}[]

export interface GetAllRepairsData {
  error: string | ZodIssue[] | null;
  RepairData: allRepairData | null;
}

export interface DeleteRepairData {
  error: string | ZodIssue[] | null;
  success: boolean;
}

export interface UpdateRepairData {
  error: string | ZodIssue[] | null;
  UpdatedRepairData: Repair | boolean;
}

import { CarDetails, Customer, Repair } from "@prisma/client";
import { ZodIssue } from "zod";

export interface CreateNewCarData {
  error: string | ZodIssue[] | null;
  CarData: CarDetails | null;
}

export type allCarData = {
  id: string;
  make: string;
  model: string;
  year: number;
  plateNumber: string;
  owner: Customer;
  ownerId: string;
  repair: Repair[];
}[];

export interface GetAllCarsData {
  error: string | ZodIssue[] | null;
  CarData: allCarData[] | null;
}

export interface DeleteCarData {
  error: string | ZodIssue[] | null;
  success: boolean;
}

export interface UpdateCarData {
  error: string | ZodIssue[] | null;
  UpdatedCarData: CarDetails | boolean;
}

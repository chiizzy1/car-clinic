import { Repair } from "@prisma/client";
import { ZodIssue } from "zod";

export interface GetTrackData {
  error: string | ZodIssue[] | null;
  trackData: Repair | null;
}
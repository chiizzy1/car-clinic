// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { withMethods } from "@/lib/api-middlewares/with-methods";
import { authOptions } from "@/lib/auth";
import { db } from "@/lib/db";
import { getServerSession } from "next-auth";
import { z } from "zod";
import { CreateNewRepairData } from "@/types/api/repairs";
import { Repair } from "@prisma/client";

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<CreateNewRepairData>
) => {
  const {
    description,
    estimatedCost,
    paid,
    fixed,
    carId,
    customerId,
    finishDate,
  }: Repair = req.body;

  try {
    const user = await getServerSession(req, res, authOptions).then(
      (data) => data?.user
    );

    if (user?.role !== "AUTHORIZED") {
      return res.status(401).json({
        error: "Unauthorized to perform this action.",
        RepairData: null,
      });
    }

    const repairData = await db.repair.create({
      data: {
        description: description,
        estimatedCost: estimatedCost,
        paid: paid,
        fixed: fixed,
        carId: carId,
        customerId: customerId,
        finishDate: finishDate,
      },
    });

    return res.status(200).json({
      error: null,
      RepairData: repairData,
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ error: error.issues, RepairData: null });
    }

    return res
      .status(500)
      .json({ error: "Internal Server Error", RepairData: null });
  }
};

export default withMethods(["POST"], handler);

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { withMethods } from "@/lib/api-middlewares/with-methods";
import { authOptions } from "@/lib/auth";
import { db } from "@/lib/db";
import { getServerSession } from "next-auth";
import { z } from "zod";
import { UpdateRepairData } from "@/types/api/repairs";
import { Repair } from "@prisma/client";

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<UpdateRepairData>
) => {
  const data: Repair = req.body;
  const query = req.query;
  const { carId } = query;

  try {
    const user = await getServerSession(req, res, authOptions).then(
      (data) => data?.user
    );

    if (user?.role !== "AUTHORIZED") {
      return res.status(401).json({
        error: "Unauthorized to perform this action.",
        UpdatedRepairData: false,
      });
    }

    const getRepair = await db.repair.findFirst({
      where: { id: carId as string },
    });

    if (!getRepair) {
      return res.status(400).json({
        error: "Repair details does not exist!",
        UpdatedRepairData: false,
      });
    }

    const updateRepairData = await db.repair.update({
      where: { id: carId as string },
      data: data,
    });

    return res.status(200).json({
      error: null,
      UpdatedRepairData: updateRepairData,
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res
        .status(400)
        .json({ error: error.issues, UpdatedRepairData: false });
    }

    return res
      .status(500)
      .json({ error: "Internal Server Error", UpdatedRepairData: false });
  }
};

export default withMethods(["PUT"], handler);

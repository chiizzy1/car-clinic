// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { withMethods } from "@/lib/api-middlewares/with-methods";
import { authOptions } from "@/lib/auth";
import { db } from "@/lib/db";
import { getServerSession } from "next-auth";
import { z } from "zod";
import { GetRepairData } from "@/types/api/repairs";

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<GetRepairData>
) => {
  console.log(req.body)
  const { customerId, carId } = req.body;
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

    const getRepairData = await db.repair.findMany({
      where: {
        customerId: customerId,
        carId: carId,
      },
      include: {
        car: true,
        owner: true,
      },
    });

    return res.status(200).json({
      error: null,
      RepairData: getRepairData,
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

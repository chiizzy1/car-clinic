// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { withMethods } from "@/lib/api-middlewares/with-methods";
import { authOptions } from "@/lib/auth";
import { db } from "@/lib/db";
import { getServerSession } from "next-auth";
import { z } from "zod";
import { GetAllCarsData } from "@/types/api/cars";

const handler = async  (
  req: NextApiRequest,
  res: NextApiResponse<GetAllCarsData>
) => {
  try {
    const user = await getServerSession(req, res, authOptions).then(
      (data) => data?.user
    );

    if (user?.role !== "AUTHORIZED") {
      return res.status(401).json({
        error: "Unauthorized to perform this action.",
        CarData: null,
      });
    }

    const getAllCarsData = await db.carDetails.findMany({
        include: {
          owner: true,
          repair: true,
        },
      })
      

    return res.status(200).json({
      error: null,
      CarData: getAllCarsData,
    });

  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ error: error.issues, CarData: null });
    }

    return res
      .status(500)
      .json({ error: "Internal Server Error", CarData: null });
  }
};

export default withMethods(["GET"], handler);

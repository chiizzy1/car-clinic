// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { withMethods } from "@/lib/api-middlewares/with-methods";
import { authOptions } from "@/lib/auth";
import { db } from "@/lib/db";
import { getServerSession } from "next-auth";
import { z } from "zod";
import { CreateNewCarData } from "@/types/api/cars";
import { CarDetails } from "@prisma/client";

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<CreateNewCarData>
) => {
  const { plateNumber, carMake, carModel, carYear, id } = req.body;
// console.log(req.body)


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


    const updateCarData = await db.carDetails.update({
      where: { 
        id: id as string, 
      },
      data: {
        plateNumber: plateNumber,
        make: carMake,
        model: carModel,
        year: carYear,
      },
    });

    return res.status(200).json({
      error: null,
      CarData: updateCarData,
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res
        .status(400)
        .json({ error: error.issues, CarData: null });
    }

    return res
      .status(500)
      .json({ error: "Internal Server Error", CarData: null });
  }
};

export default withMethods(["PUT"], handler);

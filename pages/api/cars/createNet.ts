// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { withMethods } from "@/lib/api-middlewares/with-methods";
import { authOptions } from "@/lib/auth";
import { db } from "@/lib/db";
import { getServerSession } from "next-auth";
import { z } from "zod";
import { CreateNewCarData } from "@/types/api/cars";
import { Customer } from "@prisma/client";

const handler = async  (
  req: NextApiRequest,
  res: NextApiResponse<CreateNewCarData>
) => {

  const {  make, model, year, plateNumber, ownerId } = req.body;
  const query = req.query;
  const { id } = query;

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

    const existingCar = await db.carDetails.findUnique({
      where: { plateNumber: plateNumber }
    })

    
    if (existingCar) {
      return res.status(400).json({
        error: "Car details already exists!",
        CarData: null,
      });
    }

    const carData = await db.carDetails.create({
      data: {
        make: make,
        model: model,
        year: year,
        plateNumber: plateNumber,
        ownerId: id as string
      },
    });

    return res.status(200).json({
      error: null,
      CarData: carData,
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ error: error.issues, CarData: null });
    }

    return res
      .json({ error: "Internal Server Error", CarData: null });
  }
};

export default withMethods(["POST"], handler);

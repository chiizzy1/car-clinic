// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { withMethods } from "@/lib/api-middlewares/with-methods";
import { authOptions } from "@/lib/auth";
import { db } from "@/lib/db";
import { getServerSession } from "next-auth";
import { z } from "zod";
import { GetCustomerData } from "@/types/api/customer";
import { Customer } from "@prisma/client";

const handler = async  (
  req: NextApiRequest,
  res: NextApiResponse<GetCustomerData>
) => {
  try {
    const user = await getServerSession(req, res, authOptions).then(
      (data) => data?.user
    );

    if (user?.role !== "AUTHORIZED") {
      return res.status(401).json({
        error: "Unauthorized to perform this action.",
        customerData: null,
      });
    }

    const getAllCustomersData = await db.customer.findMany({
        include: {
          cars: true,
          repairs: true,
        },
      })
      

    return res.status(200).json({
      error: null,
      customerData: getAllCustomersData,
    });

  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ error: error.issues, customerData: null });
    }

    return res
      .status(500)
      .json({ error: "Internal Server Error", customerData: null });
  }
};

export default withMethods(["GET"], handler);

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { withMethods } from "@/lib/api-middlewares/with-methods";
import { authOptions } from "@/lib/auth";
import { db } from "@/lib/db";
import { getServerSession } from "next-auth";
import { z } from "zod";
import { DeleteCustomerData } from "@/types/api/customer";

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<DeleteCustomerData>
) => {
  const query = req.query;
  const { id } = query;

  try {
    const user = await getServerSession(req, res, authOptions).then(
      (data) => data?.user
    );

    if (user?.role !== "AUTHORIZED") {
      return res.status(401).json({
        error: "Unauthorized to perform this action.",
        success: false,
      });
    }

    const getCustomer = await db.customer.findFirst({
      where: { id: id as string },
    });

    if (!getCustomer) {
      return res.status(400).json({
        error: "Customer does not exist!",
        success: false,
      });
    }

    const deleteCustomerData = await db.customer.delete({
      where: { id: id as string },
    });

    return res.status(200).json({
      error: null,
      success: true,
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ error: error.issues, success: false });
    }

    return res
      .status(500)
      .json({ error: "Internal Server Error", success: false });
  }
};

export default withMethods(["DELETE"], handler);

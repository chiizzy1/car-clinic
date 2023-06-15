// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { withMethods } from "@/lib/api-middlewares/with-methods";
import { authOptions } from "@/lib/auth";
import { db } from "@/lib/db";
import { getServerSession } from "next-auth";
import { z } from "zod";
import { GetTrackData } from "@/types/api/track";

const handler = async  (
  req: NextApiRequest,
  res: NextApiResponse<GetTrackData>
) => {

    const { trackId } = req.query;
  try {
    const user = await getServerSession(req, res, authOptions).then(
      (data) => data?.user
    );

    if (user?.role !== "AUTHORIZED") {
      return res.status(401).json({
        error: "Unauthorized to perform this action.",
        trackData: null,
      });
    }

    const trackData = await db.repair.findFirst({
        where: { trackId: trackId as string},
      })
      

    return res.status(200).json({
      error: null,
      trackData: trackData,
    });

  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ error: error.issues, trackData: null });
    }

    return res
      .status(500)
      .json({ error: "Internal Server Error", trackData: null });
  }
};

export default withMethods(["GET"], handler);
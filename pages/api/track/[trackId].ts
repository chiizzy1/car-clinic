// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { withMethods } from "@/lib/api-middlewares/with-methods";
import { db } from "@/lib/db";
import { z } from "zod";
import { GetTrackData } from "@/types/api/track";

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<GetTrackData>
) => {
  const { trackId } = req.query;
  try {
    const trackInfo = await db.repair.findFirst({
      where: { trackId: trackId as string },
      include: {
        owner: true,
        car: true,
      },
    });

    if (trackInfo) {
      const {
        car,
        owner,
        description,
        estimatedCost,
        paid,
        fixed,
        repairStatus,
        startDate,
        finishDate,
      } = trackInfo;

      const { make, model, year } = car;

      const { firstName, lastName } = owner;
      return res.status(200).json({
        error: null,
        trackData: {
          description,
          estimatedCost,
          paid,
          fixed,
          repairStatus,
          startDate,
          finishDate,
          make,
          model,
          year,
          firstName,
          lastName,
        },
      });
    }
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ error: error.issues, trackData: null });
    }

    return res
      .status(500)
      .json({ error: "Internal Server Error", trackData: null });
  }
};

export default withMethods(["POST"], handler);

import { NextApiRequest, NextApiResponse } from "next";
import { pastProperties } from "!lib/properties-data";

export default function queryFundedProperties(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.setHeader("Content-Type", "application/json");

  try {
    switch (req.method) {
      case "GET": {
        return res.status(200).json({
          status: 200,
          message: "ok",
          data: pastProperties,
        });
      }

      default: {
        return res
          .status(405)
          .json({ status: 405, message: "method-not-allowed" });
      }
    }
  } catch (error) {
    return res.status(500).json({
      status: 500,
      message: "internal-server-error",
    });
  }
}

import { NextApiRequest, NextApiResponse } from "next";

export default function queryActiveProperty(
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
          property: {
            name: "The Pavilion III",
            location: "Outer Ring Road, Bangalore",
            funding: {
              status: 64,
              active: true,
            },
            meta: {
              area: "52,277",
              price: "₹12,338",
              yield: "9.14%",
              returnTarget: "18.1%",
              fundingStatus: "64%",
            },
            slug: "#",
            imgUrl: "https://i.imgur.com/6mX8dCD.png",
          },
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

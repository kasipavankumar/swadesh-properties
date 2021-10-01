import { NextApiRequest, NextApiResponse } from "next";

type ApiHandlerOpts = {
  method?: NextApiRequest["method"];
  execBody: (req: NextApiRequest, res: NextApiResponse) => Promise<any>;
};

export default function apiHandler({ method, execBody }: ApiHandlerOpts) {
  return async function (req: NextApiRequest, res: NextApiResponse) {
    try {
      res.setHeader("Content-Type", "application/json");

      switch (req.method) {
        case method: {
          return await execBody(req, res);
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
  };
}

import { pastProperties } from "!lib/data";
import { apiHandler } from "!lib";

export default apiHandler({
  method: "GET",
  execBody: async function queryFundedProperties(_, res) {
    return res.status(200).json({
      status: 200,
      message: "ok",
      data: pastProperties,
    });
  },
});

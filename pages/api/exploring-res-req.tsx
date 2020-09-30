import { NextApiRequest, NextApiResponse } from "next";

export default function (req: NextApiRequest, res: NextApiResponse) {
  //only single function in a single file
  res.statusCode = 200;
  //return status code 200 in the network tab
  
  console.log("REQUEST BODY", req.url);

  res.setHeader("Set-Cookie", "machineofdoctor=true");

  res.json({
    number: Math.floor(Math.random() * 10),
  });
}

// localhost:3000/api/random-number

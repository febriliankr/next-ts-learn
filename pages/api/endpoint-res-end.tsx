import { NextApiRequest, NextApiResponse } from "next";

export default function (req: NextApiRequest, res: NextApiResponse) {
  //only single function in a single file
  res.statusCode = 200;
  //return status code 200 in the network tab

  res.end("Hello there maffuker!");
  //can't send anymore response because already ended
  res.json({ name: "John Doe" });
}

// localhost:3000/api/random-number

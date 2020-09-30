import { NextApiRequest, NextApiResponse } from "next";
import jwt from "jsonwebtoken";
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const KEY = 'abc123123'

export default (req: NextApiRequest, res: NextApiResponse) => {
  if (!req.body) {
    res.statusCode = 404;
    res.end("Error");
    return;
  }

  res.statusCode = 200;
  const { username, password } = req.body;

  res.json({
    token: jwt.sign({
      username,
      admin: username === "admin" && password === "admin",
    }, KEY),
  });
  console.log(req.body);
};

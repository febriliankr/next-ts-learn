# Learning Next.ts

🏫 First Time Learning TypeScript and Next.js. Focusing more on Next because it's more exciting.

## Interesting Things (NOTES)

### res & req types
Using type in declaring res & req for API endpoint, make sure you import the types from 'next'.

```
import { NextApiRequest, NextApiResponse } from "next";

export default function (req: NextApiRequest, res: NextApiResponse) {
    // req and res stuffs here
}
```

### req, res set header, set cookies, etc

play with statusCode, `setHeader("Set-Cookie", cookie)`, req.url, req.query, etc.
res.redirect('/');

```
  res.statusCode = 200;
  //return status code 200 in the network tab
  
  console.log("REQUEST BODY", req.url);

  res.setHeader("Set-Cookie", "machineofdoctor=true");
```

### JWT Auth

npm install jsonwebtoken
npm install @types/jsonwebtoken

https://jwt.io/

```
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

```

> I should learn more about JWT
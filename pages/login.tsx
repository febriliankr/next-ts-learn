import React, { useState } from "react";
import jwt from "jsonwebtoken";

function login() {
  const [username, setUsername] = useState<string>("administrator");
  const [password, setPassword] = useState<string>("");

  const [message, setMessage] = useState<string>("Please login to access");
  const [secret, setSecret] = useState<string>("");

  async function handleSubmit() {
    const res = await fetch("api/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    }).then((t) => t.json());

    const token = res.token;

    if (token) {
      const json = jwt.decode(token) as { [key: string]: string };
      setMessage(
        `Welcome ${json.username} and you are ${
          json.admin ? "an admin!" : "not an admin!"
        }`
      );

      const res = await fetch("api/secret", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          token,
        }),
      }).then((t) => t.json());

      if (res.secret) {
        setSecret(res.secretAdminCode);
      } else setSecret("Nothing available");
    } else {
      setMessage("Something went wrong!");
    }
  }

  return (
    <div>
      <h1>{secret}</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />
        <input
          type="password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <button type="button" onClick={handleSubmit}>
          Login
        </button>
      </form>
      {message ? <p>{message}</p> : null}
    </div>
  );
}

export default login;

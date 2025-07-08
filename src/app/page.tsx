"use client";

import { Button } from "@/components/ui/button";
import { authClient } from "@/db/auth-client";
import { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const signUp = () => {
    authClient.signUp.email({
      email,
      password,
      name,
    });
  };

  const submitHandler = async () => {
    await signUp();
    // console.log(response);
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <input
        type="name"
        value={name}
        placeholder="Name"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <Button type="submit">Submit</Button>
    </form>
  );
}

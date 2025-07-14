"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { authClient } from "@/db/auth-client";
// import { error } from "console";

import { useRef, useState } from "react";
import { Session } from "better-auth";

export default function Home() {
  const loginEmailRef = useRef<HTMLInputElement>(null);
  const loginPasswordRef = useRef<HTMLInputElement>(null);
  const [data, setData] = useState<Session>();
  // const router = router();

  const onLogin = async () => {
    const email = loginEmailRef.current?.value || "";
    const password = loginPasswordRef.current?.value || "";

    const { data } = await authClient.signIn.email(
      {
        email,
        password,
      },
      {
        onSuccess: async (ctx) => {
          // console.log(ctx);
          await setData(ctx.data);
        },
      }
    );
  };
  if (data) {
    return <div>{/* <CoursesPage data={data} /> */}</div>;
  }

  // console.log(data);

  return (
    <div>
      <div>
        <Input placeholder="email" ref={loginEmailRef}></Input>
        <br />
        <Input placeholder="password" ref={loginPasswordRef}></Input>
        <br />
        <Button onClick={onLogin}>Login</Button>
      </div>
    </div>
  );
}

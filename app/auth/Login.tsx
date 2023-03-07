"use client";

import { signIn } from "next-auth/react";

const Login = () => {
  return (
    <div>
      <button className="text-lg bg-slate-400 text-black rounded-md py-2 px-6" onClick={() => signIn()}>Sign In</button>
    </div>
  );
};

export default Login;

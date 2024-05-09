"use client";

import { signIn, useSession } from "next-auth/react";

import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const Login = () => {
  const { data: session } = useSession();
  console.log("This auth info", session);
  const router = useRouter();

  useEffect(() => {
    // Check if session has data
    if (session?.user) {
      // Redirect to homepage
      router.push("/");
    }
  }, [session, router]);

  return (
    <div className=" w-[80%] md:w-[30%] mt-5 border border-gray-200 rounded-md p-10">
      <h2 className="text-2xl text-center font-medium">Sign in</h2>
      {/* <div className="flex flex-col mt-2 gap-2">
        <label className="text-sm font-semibold">Enter your Email</label>
        <input
          type="email"
          placeholder="Enter your email"
          // value={user.email}
          // onChange={(e) => setUser({ ...user, email: e.target.value })}
          className="border border-gray-300 px-4 py-1 rounded-md outline-none focus-visible:shadow-lg"
        />
      </div>
      <div className="flex flex-col mt-2 gap-2">
        <label className="text-sm font-semibold">Enter your Password</label>
        <input
          type="password"
          placeholder="Enter your password"
          // value={user.password}
          // onChange={(e) => setUser({ ...user, password: e.target.value })}
          className="border border-gray-300 px-4 py-1 rounded-md outline-none focus-visible:shadow-lg"
        />
      </div>
      <button
        //   onClick={handleLogin}
        className="text-sm bg-[#f0c14b] text-amazonBlack w-full py-2 mt-4 rounded-lg"
      >
        Continue
      </button> */}
      <button
        onClick={() => signIn()}
        className="text-sm uppercase bg-black text-white w-full py-2 mt-5 rounded-md  duration-200"
      >
        Login with OAuth
      </button>
      {/* <Link href={"/registration"}>
        <button className="text-sm  border border-gray-200  w-full py-2 mt-4 rounded-lg">
          Create your amazon account
        </button>
      </Link> */}
      {/* <ToastContainer /> */}
    </div>
  );
};

export default Login;

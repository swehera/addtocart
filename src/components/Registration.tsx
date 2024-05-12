"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const Registration = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });
  const handleRegistration = async (e: React.MouseEvent<HTMLButtonElement>) => {
    // console.log(user);

    e.preventDefault();
    try {
      setLoading(true);
      const response = await fetch(
        "https://addtocart-heradev.vercel.app/api/registration",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            username: user.username,
            email: user.email,
            password: user.password,
          }),
        }
      );
      const data = await response.json();

      console.log(data);

      if (data?.success === true) {
        toast.success(data?.message);
        router.push("/login");
      } else {
        toast.error(data?.error);
      }
    } catch (error) {
      console.log("Error", error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="w-[80%] md:w-[30%] mt-5 border border-gray-200 rounded-md p-10 mx">
      <div>
        <h2 className="text-2xl font-medium">Create account</h2>
        <div className="flex flex-col mt-2 gap-2">
          <label className="text-sm font-semibold">Enter your Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            className="border border-gray-300 px-4 py-1 rounded-md outline-none focus-visible:shadow-lg"
            value={user.username}
            onChange={(e) => setUser({ ...user, username: e.target.value })}
          />
        </div>
        <div className="flex flex-col mt-2 gap-2">
          <label className="text-sm font-semibold">Enter your Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="border border-gray-300 px-4 py-1 rounded-md outline-none focus-visible:shadow-lg"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
        </div>
        <div className="flex flex-col mt-2 gap-2">
          <label className="text-sm font-semibold">Enter your Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            className="border border-gray-300 px-4 py-1 rounded-md outline-none focus-visible:shadow-lg"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
        </div>
        <button
          onClick={handleRegistration}
          className="text-sm bg-[#f0c14b]  w-full py-2 mt-4 rounded-md"
        >
          Continue
        </button>
        <Toaster />
      </div>
    </div>
  );
};

export default Registration;

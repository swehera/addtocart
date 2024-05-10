"use client";

import { useSession } from "next-auth/react";
import Image from "next/image";

const ProfilePage = () => {
  //for get the auth data
  const { data: session } = useSession();
  console.log("This is profile page", session);

  return (
    <div>
      <div className=" flex flex-col items-center justify-center mt-16">
        <Image
          src={session?.user?.image!}
          alt="user image"
          width={100}
          height={100}
          className="rounded-full "
        />
        <div className=" flex flex-col items-center justify-center">
          <p className=" text-xl md:text-2xl font-semibold text-gray-700">
            Name: {session?.user?.name}
          </p>
          <p className=" font-semibold">Email: {session?.user?.email}</p>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;

"use client";
import { RootState } from "@/app/redux/store";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useSelector } from "react-redux";

const ProfilePage = () => {
  // User database data
  const userItems = useSelector((state: RootState) => state.user.user);
  // Get the authentication data
  const { data: session } = useSession();

  console.log("This is profile page", session);
  console.log("This is userdata mongodb", userItems);

  return (
    <div>
      {userItems.length !== 0 ? (
        <div>
          <p className=" font-bold text-red-600 text-center mt-4">
            This is MongoDB user data
          </p>
          <div key={userItems[0]._id}>
            {/* Check if userItems[0] and userItems[0].saveUser are defined */}
            {userItems[0] && userItems[0].saveUser && (
              <>
                <div className=" flex flex-col items-center">
                  <p className=" font-semibold">
                    Name: {userItems[0].saveUser.username}
                  </p>
                  <p className=" text-xl">{userItems[0].saveUser.email}</p>
                  {/* Add more details as needed */}
                </div>
              </>
            )}
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center mt-16">
          <Image
            src={session?.user?.image!}
            alt="user image"
            width={100}
            height={100}
            className="rounded-full"
          />
          <div className="flex flex-col items-center justify-center">
            <p className="text-xl md:text-2xl font-semibold text-gray-700">
              Name: {session?.user?.name}
            </p>
            <p className="font-semibold">Email: {session?.user?.email}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfilePage;

"use client";
import { RootState } from "@/app/redux/store";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const ProfilePage = () => {
  const userItems = useSelector((state: RootState) => state.user.user);
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    // Check if session has data
    if (session?.user || userItems?.length !== 0) {
      // Redirect to homepage
      console.log("session data", session);
      console.log("This is mongodata", userItems);
    } else {
      router.push("/");
    }
  }, [session, router]);

  console.log("This user from mongodb", userItems);

  return (
    <div>
      {userItems.length !== 0 && userItems[0] ? (
        <div>
          <p className="font-bold text-red-600 text-center mt-4">
            This is MongoDB user data
          </p>
          <div>
            <div className="flex flex-col items-center">
              <p className="font-semibold">
                Name: {userItems[0].loggedData.username}
              </p>
              <p className="text-xl">{userItems[0].loggedData.email}</p>
              {/* Add more details as needed */}
            </div>
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

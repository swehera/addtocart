"use client";
import { RootState } from "@/app/redux/store";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { CiMenuFries } from "react-icons/ci";
import { useSelector } from "react-redux";
import { useState } from "react";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";

const Header = () => {
  //for get the auth data
  const { data: session } = useSession();
  // const cartItems = useSelector(state => state.cart)
  const [isOpen, setIsOpen] = useState(false);
  const cartItems = useSelector((state: RootState) => state.cart.cart);

  console.log("check ", isOpen);
  console.log("cart-items", cartItems);

  // get total quantity
  const getTotalQuantity = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  console.log("This is auth data", session);

  return (
    <header className=" flex  justify-between px-6 py-3 bg-gray-800 text-white sticky top-0 z-50 ">
      <div>
        <Link href={"/"} className=" text-xl font-semibold">
          Logo
        </Link>
      </div>
      <div className=" flex items-center gap-x-5">
        <Link href={"/"}>Shop</Link>
        <Link href={"/cart"}>
          <div className=" flex items-center relative">
            <FaShoppingCart className=" text-2xl" />
            <div className=" px-[6px] bg-yellow-600 rounded-full text-sm absolute left-4 bottom-3">
              {getTotalQuantity()}
            </div>
          </div>{" "}
        </Link>
        <div>
          {session?.user ? (
            <Image
              src={session?.user?.image!}
              alt="user image"
              width={35}
              height={35}
              onClick={() => setIsOpen(!isOpen)}
              className="rounded-full hidden md:block"
            />
          ) : (
            <CgProfile
              onClick={() => setIsOpen(!isOpen)}
              className=" text-2xl hidden md:block"
            />
          )}

          {isOpen ? (
            <p
              onClick={() => setIsOpen(!isOpen)}
              className=" text-2xl block md:hidden"
            >
              X
            </p>
          ) : (
            <CiMenuFries
              onClick={() => setIsOpen(!isOpen)}
              className=" text-2xl block md:hidden"
            />
          )}
        </div>
      </div>
      {isOpen && (
        <motion.div
          initial={{ x: 100 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.2,
            x: { type: "spring", stiffness: 60 },
            ease: "easeIn",
            duration: 1,
          }}
          className=" fixed top-[52px] right-0  z-40 cursor-pointer text-white bg-black/55 md:bg-black/50  min-h-screen w-full  "
        >
          <div
            onClick={() => setIsOpen(!isOpen)}
            className=" flex items-end justify-end  "
          >
            <div className=" w-full  md:w-[30%]  min-h-screen  md:bg-black">
              <ul className="  font-semibold text-xl flex flex-col items-center my-3">
                <Link href={"/"}>Home</Link>
                {session?.user && <Link href={"/profile"}>Profile</Link>}
                <Link href={"/cart"}>My Cart</Link>
                {session?.user ? (
                  <button
                    onClick={() => signOut()}
                    className=" text-red-500 font-semibold"
                  >
                    Sign Out
                  </button>
                ) : (
                  <Link href={"/login"}>Sign in</Link>
                )}
              </ul>
            </div>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Header;

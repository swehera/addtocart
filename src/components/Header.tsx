"use client";
import { RootState } from "@/app/redux/store";
import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";

const Header = () => {
  // const cartItems = useSelector(state => state.cart)
  const cartItems = useSelector((state: RootState) => state.cart.cart);
  return (
    <header className=" flex justify-between px-5 py-3 bg-gray-800 text-white">
      <div>
        <Link href={"/"} className=" text-xl font-semibold">
          Logo
        </Link>
      </div>
      <div className=" flex gap-x-3">
        <Link href={"/"}>Shop</Link>
        <Link href={"/cart"}>
          <div className=" flex items-center relative">
            <FaShoppingCart className=" text-2xl" />
            <div className=" px-[6px] bg-yellow-600 rounded-full text-sm absolute left-4 bottom-3">
              {cartItems.length}
            </div>
          </div>{" "}
        </Link>
      </div>
    </header>
  );
};

export default Header;

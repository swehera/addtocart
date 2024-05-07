"use client";

import { clearCart, removeFromCart } from "@/app/redux/cartSlice";
import { RootState } from "@/app/redux/store";
import Image from "next/image";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";

const AllItems = () => {
  const cartitems = useSelector((state: RootState) => state.cart.cart);

  const dispatch = useDispatch();

  console.log("This is check", cartitems);
  const getTotalAmount = () => {
    return cartitems.reduce((total, item) => total + item.price, 0);
  };

  return (
    <div className="max-w-5xl mx-auto min-h-screen mt-8 ">
      {cartitems.length !== 0 && (
        <div className=" flex items-center justify-center">
          <div className=" mt-2">
            <p className=" text-2xl font-semibold text-yellow-600">
              Total Amount:{" "}
              <span className=" text-black">{getTotalAmount()} ৳</span>
            </p>
          </div>
        </div>
      )}
      <div className=" grid grid-cols-1 md:grid-cols-4 gap-x-0 md:gap-x-3 gap-y-2 px-4 mt-3">
        {cartitems.map((items: any) => (
          <div
            key={items?.id}
            className=" bg-white shadow-md px-3 py-3 rounded-md"
          >
            <div>
              <p className=" text-2xl font-semibold ">{items?.title}</p>
              <div
                className=" relative"
                style={{ width: "100%", height: "260px" }}
              >
                <Image
                  layout="fill" // Fill the parent container
                  objectFit="cover" // Cover the container maintaining aspect ratio
                  src={items?.images}
                  alt="product-photo"
                  className=" sm:w-full "
                />
              </div>
              <p className=" font-semibold text-red-600">
                Price:{" "}
                <span className=" text-black font-normal">
                  {items?.price} ৳
                </span>
              </p>
              <button
                onClick={() => dispatch(removeFromCart({ id: items.id }))}
                className=" bg-red-600 mt-1 px-3 py-1 rounded-md text-white text-sm font-semibold"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
      {cartitems.length !== 0 && (
        <div className=" flex items-center justify-center mt-4 mb-10">
          <button
            onClick={() => dispatch(clearCart())}
            className=" px-3 py-1 rounded-md bg-red-900 text-white font-bold"
          >
            reset cart
          </button>
        </div>
      )}
      {cartitems.length === 0 && (
        <div className=" flex flex-col items-center justify-center min-h-screen ">
          <div>
            <p>Your cart is empty</p>
          </div>
          <Link
            href={"/"}
            className=" bg-black text-white px-3 py-1 rounded-md text-sm"
          >
            go to shopping
          </Link>
        </div>
      )}
    </div>
  );
};

export default AllItems;

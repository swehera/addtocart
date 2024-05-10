"use client";

import {
  clearCart,
  decrementQuantity,
  incrementQuantity,
  removeFromCart,
} from "@/app/redux/cartSlice";
import { RootState } from "@/app/redux/store";
// import { checkout } from "@/app/stripe/checkout";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import toast, { Toaster } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";

const AllItems = () => {
  const cartitems = useSelector((state: RootState) => state.cart.cart);

  const { data: session } = useSession();

  const dispatch = useDispatch();

  console.log("This is check", cartitems);

  // Increment quantity
  const incrementProductQuantity = (id: number) => {
    dispatch(incrementQuantity({ id }));
  };

  // Decrement quantity
  const decrementProductQuantity = (id: number) => {
    dispatch(decrementQuantity({ id }));
  };

  // for get total amount
  const getTotalAmount = () => {
    return cartitems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  // const getSingleProductAmount = () => {
  //   console.log("This is single product", cartitems);
  //   console.log(
  //     "This is single product price",
  //     cartitems.price * cartitems.quantity
  //   );
  // };

  //checkout functio for check if not login then give a message
  //checkout function for checking if not logged in then give a message
  const checkoutHandle = () => {
    if (!session?.user) {
      toast.error("Please sign in to Checkout");
    } else {
      toast.success("Stripe Operation comming");
      // checkout({
      //   lineItems: [{ price: "price_1PEKdhH7opcGEqwGBHT4JQGl", quantity: 1 }], // Replace with your one-time price ID
      //   mode: "payment", // Switch to payment mode
      // });
    }
  };

  return (
    <div className="max-w-5xl mx-auto min-h-screen mt-5 ">
      {cartitems.length !== 0 && (
        <div className=" flex flex-col items-center justify-center">
          <div className=" mt-2">
            <p className=" text-2xl font-semibold text-yellow-600">
              Total Amount:{" "}
              <span className=" text-black">{getTotalAmount()} ৳</span>
            </p>
          </div>
          <div className=" flex items-center justify-center my-2">
            <button
              onClick={() => checkoutHandle()}
              className=" px-3 py-1 bg-gray-900 text-white rounded-md"
            >
              proceed to checkout
            </button>
          </div>
        </div>
      )}

      <div className=" grid grid-cols-1 md:grid-cols-4 gap-x-0 md:gap-x-3 gap-y-2 px-4 mt-3">
        {cartitems.map((items: any) => (
          <div
            key={items?.id}
            className=" bg-slate-100 shadow-md px-3 py-3  rounded-md"
          >
            <div>
              <p className=" text-[22px] font-[400] ">{items?.title}</p>
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
              <div className=" flex items-center justify-center gap-x-3 mt-2">
                <button
                  className="px-3 py-1 rounded-md border border-gray-500"
                  onClick={() => decrementProductQuantity(items.id)}
                >
                  -
                </button>
                <p className=" font-bold">{items?.quantity}</p>
                <button
                  className="px-3 py-1 rounded-md border border-gray-500 "
                  onClick={() => incrementProductQuantity(items.id)}
                >
                  +
                </button>
                <div>
                  <p>৳ {items.price * items.quantity}</p>
                </div>
              </div>
              <p className=" font-semibold text-red-600">
                Price:{" "}
                <span className=" text-black font-bold">{items?.price} ৳</span>
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
        <div className="  flex flex-col items-center justify-center min-h-screen ">
          <div className=" flex items-center justify-center gap-x-3 border-2 border-gray-300 rounded-md  px-4 py-3 ">
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
        </div>
      )}
      <Toaster />
    </div>
  );
};

export default AllItems;

"use client";

import { clearCart, removeFromCart } from "@/app/redux/cartSlice";
import { RootState } from "@/app/redux/store";
import { useDispatch, useSelector } from "react-redux";

const AllItems = () => {
  const cartitems = useSelector((state: RootState) => state.cart.cart);
  const dispatch = useDispatch();

  return (
    <div>
      <div className=" grid grid-cols-1 md:grid-cols-4 gap-x-0 md:gap-x-3 gap-y-2 px-4 mt-4">
        {cartitems.map((items: any) => (
          <div
            key={items?.title}
            className="  bg-slate-400 px-3 py-1 rounded-md"
          >
            <div>
              <p>{items?.title}</p>
              <button
                onClick={() => dispatch(removeFromCart({ id: items.id }))}
                className=" bg-red-600 px-3 py-1 rounded-md text-white text-sm font-semibold"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
      {cartitems.length !== 0 && (
        <div className=" flex items-center justify-center mt-4">
          <button
            onClick={() => dispatch(clearCart())}
            className=" px-3 py-1 rounded-md bg-red-900 text-white font-bold"
          >
            Remove All
          </button>
        </div>
      )}
    </div>
  );
};

export default AllItems;

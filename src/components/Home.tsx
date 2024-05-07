"use client";
import React from "react";

import Product from "./Product";

const Home = () => {
  return (
    <div>
      <div className=" max-w-5xl mx-auto min-h-screen  ">
        <h1 className=" text-2xl mt-3 font-semibold text-center">
          Buy new product{" "}
        </h1>

        <div className=" flex items-center justify-center w-full ">
          <div className=" grid grid-cols-1 md:grid-cols-4 gap-x-0 md:gap-x-3">
            <Product
              id={1}
              title={"This is Product 1"}
              images={
                "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
              }
              price={200}
            />
            <Product
              id={2}
              title={"This is Product 2"}
              images={
                "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"
              }
              price={100}
            />
            <Product
              id={3}
              title={"This is Product 3"}
              images={"https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg"}
              price={600}
            />
            <Product
              id={4}
              title={"This is Product 4"}
              images={"https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg"}
              price={200}
            />
          </div>
        </div>

        {/* <AddCart />
        <Stats totalCount={10} /> */}
      </div>
    </div>
  );
};

export default Home;

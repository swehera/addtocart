"use client";
import React from "react";

import Product from "./Product";

const Home = () => {
  return (
    <div>
      <div className=" max-w-5xl mx-auto min-h-screen  ">
        <h1 className=" text-2xl mt-3 font-semibold text-center">
          Add to Cart{" "}
        </h1>

        <div className=" flex items-center justify-center w-full ">
          <div className=" grid grid-cols-1 md:grid-cols-4 gap-x-0 md:gap-x-3">
            <Product id={1} title={"This is Product 1"} />
            <Product id={2} title={"This is Product 2"} />
            <Product id={3} title={"This is Product 3"} />
            <Product id={4} title={"This is Product 4"} />
          </div>
        </div>

        {/* <AddCart />
        <Stats totalCount={10} /> */}
      </div>
    </div>
  );
};

export default Home;

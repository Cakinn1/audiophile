import React from "react";

export default function Left() {
  return (
    <section className="w-[33%] space-y-6">
      <div className="space-y-2">
        <h3 className="tracking-[10px] uppercase text-[#ffffff80]">
          New product
        </h3>
        <h1 className="text-5xl uppercase tracking-wider font-semibold">
          XX99 Mark II Headphones
        </h1>
      </div>
      <p className="text-[#ffffff80] text-sm">
        Experience natural, lifelike audio and exceptional build quality made
        for the passionate music ethusiast.
      </p>
      <button className="uppercase tracking-widest text-sm p-3 px-6 rounded-md hover:bg-opacity-100 bg-opacity-90 duration-300 bg-[#D87D4A]">
        See Product
      </button>
    </section>
  );
}

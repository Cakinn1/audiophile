import React from "react";
import Left from "../components/Landing/Left";
import Right from "../components/Landing/Right";

export default function Landing() {
  return (
    <section style={{height: "calc(100vh - 200px)"}} className="max-w-[1100px] items-center py-[40px] mx-auto flex gap-x-12 text-white ">
      <Left />

      <Right />
    </section>
  );
}

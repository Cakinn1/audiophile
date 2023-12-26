import { useState } from "react";

export default function RenderNavLinks({ link }: { link: string }) {
  const [select, setSelect] = useState<string>("Home");
  function handleSelect(value: string) {
    if (select === value) {
      setSelect("");
    } else {
      setSelect(value);
    }
    console.log("Current select state:", select);
  }

  return (
    <h1
      onClick={() => handleSelect(link)}
      className={`uppercase text-sm tracking-widest ${
        link === select ? "text-[#D87D4A] duration-300" : "text-white"
      }`}
    >
      {link}
    </h1>
  );
}

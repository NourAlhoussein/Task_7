"use client";
import { useState } from "react";
import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";
import { FaCheck } from "react-icons/fa6";
function Checkbox() {
  const [check, setCheck] = useState<boolean>(false);
  return (
    <button
      onClick={() => {
        setCheck(!check);
      }}
      className="relative text-black/40 2xl:text-lg text-base cursor-pointer"
    >
      <MdOutlineCheckBoxOutlineBlank />

      {check && (
        <span className="absolute top-[50%] -translate-y-[50%] left-0 text-[#FA8B02] 2xl:text-xl text-base">
          <FaCheck />
        </span>
      )}
    </button>
  );
}

export default Checkbox;

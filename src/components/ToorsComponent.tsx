"use client";
import React, { useState } from "react";
import { Tours } from "@/data/tours";
import { IoIosArrowDown } from "react-icons/io";
import { FaEarthAsia } from "react-icons/fa6";
import { HiOutlineUserGroup } from "react-icons/hi";
import { CiSearch } from "react-icons/ci";
function ToorsComponent() {
  const [choosenCat, setChoosenCat] = useState<string>("public");
  return (
    <div className="bg-[#ffffff66] md:w-full w-[275px] 2xl:p-[20px] p-[12px] rounded-[12px]">
      <div className="flex flex-row items-center justify-start">
        <button
          className={`flex flex-row items-center justify-center cursor-pointer 2xl:text-lg text-sm 2xl:p-[16px] p-[10px] gap-[4px] rounded-tl-[12px] ${
            choosenCat === "public"
              ? "bg-white text-[#FA8B02]"
              : "bg-[#ffffff66] text-white"
          }`}
          onClick={() => {
            setChoosenCat("public");
          }}
        >
          <span>
            <FaEarthAsia />
          </span>
          Public Tours
        </button>
        <button
          className={`flex flex-row items-center justify-center cursor-pointer 2xl:text-lg text-sm 2xl:p-[16px] p-[10px] gap-[4px] rounded-tr-[12px] ${
            choosenCat === "private"
              ? "bg-white text-[#FA8B02]"
              : "bg-[#ffffff66] text-white"
          }`}
          onClick={() => {
            setChoosenCat("private");
          }}
        >
          <span>
            <HiOutlineUserGroup />
          </span>
          Private Tours
        </button>
      </div>
      {choosenCat === "public" && (
        <div
          className="flex md:flex-row flex-col items-center justify-between bg-white 2xl:gap-[75px] xl:gap-[30px] md:gap-[10px] gap-[30px]
          2xl:pl-[30px] pl-[10px] pr-[12px] 2xl:py-[28px] py-[20px]
          rounded-tl-0 rounded-tr-[12px] rounded-bl-[12px] rounded-br-[12px]"
        >
          {" "}
          {Tours.public.map((tour) => {
            return (
              <div
                key={tour.id}
                className="flex flex-col items-center justify-center gap-[8px]"
              >
                <div className="flex flex-row items-center justify-start cursor-pointer w-full text-black font-semibold 2xl:text-lg text-xs gap-[8px]">
                  <span>{tour.icon}</span>
                  {tour.title}
                </div>
                <div className="flex flex-row items-center justify-end cursor-pointer w-full text-[#333333] 2xl:text-lg text-xs gap-[10px]">
                  {tour.options}
                  <span>
                    <IoIosArrowDown />
                  </span>
                </div>
              </div>
            );
          })}
          <div className="bg-[#FA8B02] 2xl:p-[24px] p-[16px] rounded-[12px] text-white 2xl:text-4xl text-xl cursor-pointer">
            <CiSearch />
          </div>
        </div>
      )}
      {choosenCat === "private" && (
        <div
          className="flex md:flex-row flex-col items-center justify-between bg-white 2xl:gap-[75px] xl:gap-[30px] md:gap-[10px] gap-[30px]
          2xl:pl-[30px] pl-[10px] pr-[12px] 2xl:py-[28px] py-[20px]
    rounded-tl-0 rounded-tr-[12px] rounded-bl-[12px] rounded-br-[12px]"
        >
          {" "}
          {Tours.private.map((tour) => {
            return (
              <div
                key={tour.id}
                className="flex flex-col items-center justify-center gap-[8px]"
              >
                <div className="flex flex-row items-center justify-start cursor-pointer w-full text-black font-semibold 2xl:text-lg text-xs gap-[8px]">
                  <span>{tour.icon}</span>
                  {tour.title}
                </div>
                <div className="flex flex-row items-center justify-end cursor-pointer w-full text-[#333333] 2xl:text-lg text-xs gap-[10px]">
                  {tour.options}
                  <span>
                    <IoIosArrowDown />
                  </span>
                </div>
              </div>
            );
          })}
          <div className="bg-[#FA8B02] 2xl:p-[24px] p-[16px] rounded-[12px] text-white 2xl:text-4xl text-xl cursor-pointer">
            <CiSearch />
          </div>
        </div>
      )}
    </div>
  );
}

export default ToorsComponent;

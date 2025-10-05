"use client";
import React, { useEffect } from "react";
import { useState } from "react";
import { Destinations } from "@/data/destinations";
import DestinationCard from "./DestinationCard";
import { MdArrowForwardIos } from "react-icons/md";
import { MdArrowBackIosNew } from "react-icons/md";
function DestinationGrid() {
  const [itemsPerPage, setItemsPerPage] = useState(4);
  const [page, setPage] = useState(0);

  const start = page;
  const end = page + itemsPerPage;
  const currentItems = Destinations.slice(start, end);
  const maxIndex = Destinations.length - itemsPerPage;
  useEffect(() => {
    function changeItemNum() {
      if (window.innerWidth < 640) {
        setItemsPerPage(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(2);
      } else if (window.innerWidth < 1536) {
        setItemsPerPage(3);
      } else {
        setItemsPerPage(4);
      }
    }
    changeItemNum();
    window.addEventListener("resize", changeItemNum);
    return () => window.removeEventListener("resize", changeItemNum);
  }, []);
  return (
    <div>
      <div className="flex sm:flex-row flex-col items-center justify-between">
        <div className="font-extrabold 2xl:text-[32px] md:text-2xl text-xl sm:text-left text-center">
          Explore Our Popular Destinantions{" "}
        </div>
        {/* next and prev button in big size */}
        <div className="sm:flex flex-row gap-[20px] hidden">
          <button
            className={`flex flex-col items-center justify-center cursor-pointer 2xl:w-[50px] 2xl:h-[50px] w-[30px] h-[30px] rounded-full ${
              page === 0
                ? "bg-[#efefef] cursor-not-allowed"
                : "bg-[#FA8B02] text-white"
            }`}
            disabled={page === 0}
            onClick={() => setPage((p) => p - 1)}
          >
            <MdArrowBackIosNew />
          </button>
          <button
            className={`flex flex-col items-center justify-center cursor-pointer 2xl:w-[50px] 2xl:h-[50px] w-[30px] h-[30px] rounded-full
              ${
                page >= maxIndex
                  ? "bg-[#efefef] cursor-not-allowed"
                  : "bg-[#FA8B02] text-white"
              }`}
            disabled={page >= maxIndex}
            onClick={() => setPage((p) => p + 1)}
          >
            <MdArrowForwardIos />
          </button>
        </div>
      </div>
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 
      items-start justify-between gap-[33px] sm:mt-[60px] mt-[40px] w-full"
      >
        {currentItems.map((d) => {
          return <DestinationCard key={d.id} d={d} />;
        })}
      </div>
      {/* next and prev button in small size */}
      <div className="sm:hidden flex flex-row items-center justify-center mt-[20px] gap-[20px]">
        <button
          className={`flex flex-col items-center justify-center 2xl:w-[50px] 2xl:h-[50px] w-[30px] h-[30px] rounded-full ${
            page === 0
              ? "bg-[#efefef] cursor-not-allowed"
              : "bg-[#FA8B02] text-white"
          }`}
          disabled={page === 0}
          onClick={() => setPage((p) => p - 1)}
        >
          <MdArrowBackIosNew />
        </button>
        <button
          className={`flex flex-col items-center justify-center 2xl:w-[50px] 2xl:h-[50px] w-[30px] h-[30px] rounded-full
              ${
                page >= maxIndex
                  ? "bg-[#efefef] cursor-not-allowed"
                  : "bg-[#FA8B02] text-white"
              }`}
          disabled={page >= maxIndex}
          onClick={() => setPage((p) => p + 1)}
        >
          <MdArrowForwardIos />
        </button>
      </div>
    </div>
  );
}

export default DestinationGrid;

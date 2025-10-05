import React from "react";
import Image from "next/image";
import type { StaticImageData } from "next/image";
import { FaEuroSign } from "react-icons/fa";
import { CiCalendarDate } from "react-icons/ci";
import { HiOutlineUserGroup } from "react-icons/hi";
interface destinationProps {
  id: number;
  image: string | StaticImageData;
  title: string;
  price: string;
  time: string;
  numOfPerson: string;
  description: string;
}
function DestinationCard({ d }: { d: destinationProps }) {
  return (
    <div
      key={d.id}
      className="flex flex-col gap-[16px] items-center justify-center w-full"
    >
      <div className="flex flex-col 2xl:gap-[16px] gap-[10px] items-start justify-center w-full">
        <Image
          className="rounded-[24px] w-full 2xl:h-[400px] h-[350px]"
          src={d.image}
          alt="destination"
        />
        <div className="2xl:text-2xl text-xl font-bold">{d.title}</div>
        <div className="flex flex-row items-center">
          <span className="2xl:text-lg text-base font-medium">from</span>
          <span
            className="flex flex-row items-center text-[#FA8B02] 
            font-extrabold 2xl:text-2xl text-xl ml-[8px]"
          >
            {d.price} <FaEuroSign />
          </span>
        </div>
        <div className="flex flex-row items-center justify-between w-full 2xl:text-base text-sm font-semibold text-[#fa8b02] ">
          <div className="flex flex-row items-center justify-start">
            <span className="2xl:text-2xl text-xl mr-[8px]">
              <CiCalendarDate />
            </span>
            {d.time}
          </div>
          <div className="flex flex-row items-center justify-start">
            <span className="2xl:text-2xl text-xl mr-[8px]">
              <HiOutlineUserGroup />
            </span>
            {d.numOfPerson} pp
          </div>
        </div>
        <div className="2xl:text-lg text-base font-normal text-[#333333]">
          {d.description}
        </div>
      </div>
    </div>
  );
}

export default DestinationCard;

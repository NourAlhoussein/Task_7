import React from "react";
import Image from "next/image";
import { Package } from "@/data/packages";
import { FaEuroSign } from "react-icons/fa6";
function PackageCard({ p }: { p: Package }) {
  return (
    <div className="w-full">
      <Image
        className="rounded-tl-[24px] rounded-tr-[24px] w-full h-[340px]"
        src={p.image}
        alt={p.title}
      />
      <div className="flex flex-col shadow-lg shadow-black/5 gap-[16px] p-[25px] border-t-0 border-1 border-black/10 rounded-bl-[24px] rounded-br-[24px]">
        <div className="text-xl font-extrabold">{p.title}</div>
        <div>
          <span className="text-black/40">
            <FaEuroSign />
          </span>
          <span className="2xl:text-5xl text-3xl font-bold text-[#FA8B02] ml-3">
            {p.price}
          </span>
          <span className="text-black/40">/day</span>
        </div>
        <div className="flex flex-col gap-[16px]">
          {p.types.map((t) => {
            return (
              <div className="flex flex-row gap-[10px]" key={t.id}>
                <div>
                  <Image src={t.iconImg} alt={t.desc} />
                </div>
                <div className="2xl:text-lg text-base font-normal">
                  {t.desc}
                </div>
              </div>
            );
          })}
        </div>
        <button
          className="text-[#FA8B02] border-1 border-[#FA8B02]
        rounded-[50px] py-[12px] cursor-pointer text-xl font-semibold mt-[10px]"
        >
          Book Now
        </button>
      </div>
    </div>
  );
}

export default PackageCard;

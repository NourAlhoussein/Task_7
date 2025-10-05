import React from "react";
import Image from "next/image";
import { items } from "@/data/footer";
function Footer() {
  return (
    <div
      className="2xl:px-[250px] xl:px-[100px] md:px-[50px] px-[15px] py-[40px] 
    2xl:mt-[215px] xl:mt-[100px] sm:mt-[60px] mt-[40px] bg-[#333333]"
    >
      <div className="flex flex-col items-start justify-start xl:gap-[33px] gap-[16px]">
        <div>
          <Image
            className="2xl:w-[130px] w-[100px] cursor-pointer"
            src="/images/Logo.png"
            width={133}
            height={130}
            alt="logo"
          />
        </div>
        <div className="w-full h-[1px] bg-[#575757]"></div>
        <div className="flex lg:flex-row flex-wrap 2xl:gap-[80px] gap-[60px]">
          <div className="flex flex-col">
            <div className="xl:text-xl text-base font-extrabold text-white">Services</div>
            <div className="flex flex-col gap-[10px] mt-[20px]">
              {items.services.map((s) => {
                return (
                  <div key={s.id} className="font-semibold text-white xl:text-lg text-sm">
                    {s.content}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="flex flex-col">
            <div className="xl:text-xl text-base font-extrabold text-white">Home</div>
            <div className="flex flex-col gap-[10px] mt-[20px]">
              {items.Home.map((h) => {
                return (
                  <div key={h.id} className="font-semibold text-white xl:text-lg text-sm">
                    {h.content}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="flex flex-col">
            <div className="xl:text-xl text-base font-extrabold text-white">Help</div>
            <div className="flex flex-col gap-[10px] mt-[20px]">
              {items.Help.map((h) => {
                return (
                  <div key={h.id} className="font-semibold text-white xl:text-lg text-sm">
                    {h.content}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="flex flex-col">
            <div className="xl:text-xl text-base font-extrabold text-white">Contacts</div>
            <div className="flex flex-col gap-[10px] mt-[20px]">
              {items.Contacts.map((c) => {
                return (
                  <div
                    key={c.id}
                    className="flex flex-row items-center gap-[10px]"
                  >
                    <div className="text-2xl text-[#FA8B02]">{c.icon}</div>
                    <div className="font-semibold text-white xl:text-lg text-sm">
                      {c.content}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="flex flex-col">
            <div className="xl:text-xl text-base font-extrabold text-white">
              Social Media
            </div>
            <div className="flex flex-row gap-[10px] mt-[20px]">
              {items.SocialMedia.map((s) => {
                return (
                  <div
                    key={s.id}
                    className="flex flex-col items-center justify-center w-[48px] h-[48px] rounded-full bg-[#FA8B02]"
                  >
                    <div className="text-2xl text-black">{s.icon}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="w-full h-[1px] bg-[#575757]"></div>
        <div className="flex flex-col items-center justify-center w-full">
          <div className="text-white font-normal text-base">
            Copyright © 2025. All rights reserved.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

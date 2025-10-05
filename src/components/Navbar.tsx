"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import { navItems } from "@/data/navbar";
import { IoIosArrowDown } from "react-icons/io";
import { RiMenu5Fill } from "react-icons/ri";
import { IoCloseSharp } from "react-icons/io5";
import { useEffect } from "react";

import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import { usePathname } from "next/navigation";

function Navbar() {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const pathname = usePathname();
  const [openNav, setOpenNav] = useState<boolean>(false);
  const [isOrange, setIsOrange] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight) {
        setIsOrange(true);
      } else {
        setIsOrange(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div
      className="2xl:px-[250px] xl:px-[100px] md:px-[50px] px-[15px] py-[10px]
     bg-[#FFFFFF33] text-white font-semibold w-full fixed top-0 left-0 z-20"
    >
      <ul className="lg:flex hidden flex-row justify-between items-center 2xl:text-xl text-sm">
        <div>
          <Image
            className="2xl:w-[130px] w-[100px] cursor-pointer"
            src="/images/Logo.png"
            width={133}
            height={130}
            alt="logo"
          />
        </div>
        <div className="flex flex-row justify-between items-center gap-[40px]">
          {navItems.map((item) => {
            return (
              <li
                key={item.id}
              >
                <Link
                  className={`${
                    pathname === item.href ? "border-b-3 border-[#FA8B02]" : ""
                  } ${isOrange ? "text-[#FA8B02]" : "text-white"}`}
                  href={item.href}
                >
                  {item.name}
                </Link>
              </li>
            );
          })}
        </div>
        <div className="flex flex-row justify-between items-center gap-[22px]">
          <li
            className={`flex flex-row justify-between items-center cursor-pointer ${
              isOrange ? "text-[#FA8B02]" : "text-white"
            }`}
          >
            Eng{" "}
            <span>
              <IoIosArrowDown />
            </span>
          </li>
          <li>
            <button
              className={`cursor-pointer ${
                isOrange ? "text-[#FA8B02]" : "text-white"
              }`}
              onClick={() => {
                setShowLogin(true);
                setShowSignup(false);
              }}
            >
              Login
            </button>
          </li>
          <li>
            <button
              className="xl:w-[168px] xl:h-[47px] w-[140px] h-[40px] rounded-[50px] bg-[#FA8B02] cursor-pointer"
              onClick={() => {
                setShowSignup(true);
                setShowLogin(false);
              }}
            >
              Sign Up
            </button>
          </li>
        </div>
      </ul>

      <div className="lg:hidden flex flex-row items-center justify-between">
        <div>
          <Image src="/images/Logo.png" width={70} height={130} alt="logo" />
        </div>

        <button
          onClick={() => setOpenNav(!openNav)}
          className="text-2xl text-[#FA8B02] font-bold"
        >
          <RiMenu5Fill />
        </button>

        <div
          className={`absolute top-0 left-0 w-full h-screen
             bg-[#FA8B02] flex flex-col items-center justify-center gap-[40px]
              transition-transform duration-500 ease-in-out
              ${openNav ? "translate-x-0" : "translate-x-full"}`}
        >
          <button
            onClick={() => {
              setOpenNav(!openNav);
            }}
            className="text-2xl font-bold"
          >
            <IoCloseSharp />
          </button>
          <div className="flex flex-col justify-between items-center text-sm gap-[40px]">
            {navItems.map((item) => {
              return (
                <Link
                  key={item.id}
                  onClick={() => {
                    setOpenNav(!openNav);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className={`${
                    pathname === item.href ? "border-b-2 border-white" : ""
                  }`}
                  href={item.href}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>
          <div className="flex flex-col justify-between items-center text-sm gap-[22px]">
            <div className="flex flex-row justify-between items-center cursor-pointer">
              Eng{" "}
              <span>
                <IoIosArrowDown />
              </span>
            </div>

            <button
              className="cursor-pointer"
              onClick={() => {
                setShowLogin(true);
                setShowSignup(false);
                setOpenNav(false);
              }}
            >
              Login
            </button>

            <button
              className="cursor-pointer"
              onClick={() => {
                setShowSignup(true);
                setShowLogin(false);
                setOpenNav(false);
              }}
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
      
      {showLogin && <LoginForm setShowLogin={setShowLogin} />}
      {showSignup && <SignupForm setShowSignup={setShowSignup} />}
    </div>
  );
}

export default Navbar;

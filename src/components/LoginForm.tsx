'use client';

import { IoMdClose } from "react-icons/io";
import { HiEyeSlash } from "react-icons/hi2";
import { motion, AnimatePresence } from "framer-motion";

type Props = {
  setShowLogin: React.Dispatch<React.SetStateAction<boolean>>;
};

function LoginForm({ setShowLogin }: Props) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="flex flex-col items-center justify-center bg-[#333333]/80 h-[100vh]
         w-full z-50 absolute top-0 left-0"
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 50 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 50 }}
          transition={{ duration: 0.4 }}
          className="flex flex-col 2xl:p-[40px] p-[16px] bg-white 2xl:w-[488px] rounded-[24px]"
        >
          <div className="flex flex-row items-center justify-between w-full">
            <div className="text-black 2xl:text-[32px] text-xl font-bold">
              Login
            </div>
            <button
              onClick={() => {
                setShowLogin(false);
              }}
              className="flex flex-col items-center justify-center text-black/60 2xl:text-2xl cursor-pointer"
            >
              <IoMdClose />
            </button>
          </div>
          <div className="flex flex-col 2xl:gap-[20px] gap-[10px] mt-[20px] text-black/60">
            <div className="flex flex-col gap-[10px]">
              <label className="2xl:text-lg text-base" htmlFor="">
                Email Address
              </label>
              <input
                className="2xl:text-base text-xs border-1 border-black/20 rounded-[8px] 2xl:px-[24px] 2xl:py-[14px] px-[12px] py-[7px]"
                type="text"
                placeholder="Enter your email address"
              />
            </div>
            <div className="flex flex-col gap-[10px]">
              <label className="2xl:text-lg text-base" htmlFor="">
                Password
              </label>
              <div className="flex flex-row items-center justify-between bg-white border-1 border-black/20 rounded-[8px] 2xl:px-[24px] 2xl:py-[14px] px-[12px] py-[7px]">
                <input
                  className="2xl:text-base text-xs"
                  type="text"
                  placeholder="Enter your password"
                />
                <span className="text-black/40 2xl:xl:text-lg text-base">
                  <HiEyeSlash />
                </span>
              </div>
            </div>
            <div className="flex flex-row items-center gap-[10px]">
              <div className="text-black/60 text-sm">Forgot your password?</div>
            </div>
            <button
              className="bg-[#FA8B02] text-white rounded-[50px]
          w-full 2xl:h-[47px] h-[35px] 2xl:text-lg text-sm cursor-pointer"
            >
              Sign In
            </button>
          </div>
          <div className="flex flex-col items-center justify-center text-black/60 2xl:text-base text-sm my-[6px]">
            or
          </div>
          <button
            className="flex flex-row items-center px-[24px] text-black/60 border-1 border-black/20 rounded-[50px] w-full 2xl:h-[47px] h-[35px]
        cursor-pointer"
          >
            <div className="flex1">
              <img
                className="2xl:w-[24px] 2xl:h-[24px] w-[16px] h-[16px]"
                src="/images/googleIcon.png"
                alt="google"
              />
            </div>
            <div className="flex-2 2xl:text-lg text-sm">
              Sign In with Google
            </div>
          </button>
          <div className="flex flex-row items-center justify-center 2xl:text-base text-xs font-semibold mt-[20px] text-black/60">
            Don’t have an account ?
            <span className="text-[#FA8B02] ml-2 text-sm">Sign Up</span>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default LoginForm;

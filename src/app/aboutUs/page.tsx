import React from "react";
import Image from "next/image";
import { benifits } from "@/data/benifits";
import BenifitsComponent from "@/components/BenifitsComponent";
import FeaturesComponent from "@/components/FeaturesComponent";
import Customers from "@/components/Customers";
function AboutUs() {
  return (
    <div>
      {/* section 1 */}

      <div
        className="2xl:px-[250px] xl:px-[100px] md:px-[50px] px-[15px]
      md:py-[100px] py-[50px] w-full bg-[url(/images/aboutus.jpg)] bg-cover h-[100vh]"
      >
        <div className="flex flex-col items-center justify-center w-full">
          <h1 className="2xl:text-7xl text-5xl text-white 2xl:mt-[160px] mt-[100px] text-center Podcast">
            Our team cares about your full relax
          </h1>
          <div className="2xl:text-2xl font-bold text-white mt-[16px] text-center sm:w-[65%] w-full">
            But I must explain to you how all this mistaken idea of denouncing
            pleasure and praising pain was born and I will give you a complete
            account of the system, and expound the actual teachings of the great
            explorer of the truth, the master-builder of human happiness.
          </div>
          <button
            className="border-1 border-white rounded-[50px] sm:text-xl text-sm text-white
          sm:px-[24px] sm:py-[14px] px-[16px] py-[10px] mt-[24px]"
          >
            View our Tour Packages
          </button>
        </div>
      </div>

      {/* section 2 */}

      <div className="2xl:px-[250px] xl:px-[100px] md:px-[50px] px-[15px]">
        <div className="2xl:mt-[215px] xl:mt-[100px] sm:mt-[60px] mt-[40px]">
          <BenifitsComponent Benifit={benifits.offers[0]} />
        </div>
      </div>

      {/* section 3 */}

      <div className="2xl:mt-[215px] xl:mt-[200px] sm:mt-[60px] mt-[40px]">
        <FeaturesComponent />
      </div>

      {/* section 4 */}

      <div className="2xl:px-[250px] xl:px-[100px] md:px-[50px] px-[15px]">
        <div className="2xl:mt-[215px] xl:mt-[100px] sm:mt-[60px] mt-[40px]">
          <Customers />
        </div>
      </div>
    </div>
  );
}

export default AboutUs;

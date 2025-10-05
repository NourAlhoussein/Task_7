import React from "react";
import { features } from "@/data/features";
import FeatureCard from "./FeatureCard";
function FeaturesComponent() {
  return (
    <div
      className="flex flex-wrap items-center sm:justify-between justify-center w-full
      bg-gradient-to-t from-[#FFB984] to-[#FDD0A2] relative
    2xl:px-[250px] xl:px-[100px] md:px-[50px] px-[15px] py-[80px] 2xl:gap-[5px] gap-[30px]"
    >
      {features.map((f) => {
        return <FeatureCard key={f.id} f={f} />;
      })}
    </div>
  );
}

export default FeaturesComponent;

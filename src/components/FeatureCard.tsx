import { Feature } from "@/data/features";
import Image from "next/image";
function FeatureCard({ f }: { f: Feature }) {
  return (
    <div className="flex flex-col items-center justify-center bg-[#FFD9B1]
    gap-[15px] p-[30px] w-[290px] h-[190px] rounded-[24px]">
      <Image src={f.image} alt={f.text} />
      <div className="font-semibold lg:text-xl text-base text-center">{f.text}</div>
    </div>
  );
}

export default FeatureCard;

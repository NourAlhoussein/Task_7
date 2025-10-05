import { StaticImageData } from "next/image";
import Image from "next/image";
import { FaPlus } from "react-icons/fa6";
interface Option {
  id: number;
  number: number;
  desc: string;
}
interface BenifitProps {
  image: string | StaticImageData;
  desc1: string;
  title: string;
  desc2: string;
  options: Option[];
}
function BenifitsComponent({ Benifit }: { Benifit: BenifitProps }) {
  return (
    <div className="grid sm:grid-cols-2 grid-cols-1 2xl:gap-[200px] lg:gap-[100px] sm:gap-[60px] gap-[30px] items-center justify-center">
      <div className="flex flex-col sm:items-end items-center justify-center">
        <Image src={Benifit.image} alt={Benifit.title} />
      </div>
      <div>
        <div className="2xl:text-base md:text-sm text-[#00000099] font-semibold">
          {Benifit.desc1}
        </div>
        <h1 className="2xl:text-[32px] md:text-2xl text-xl font-extrabold mt-[6px]">{Benifit.title}</h1>
        <div className="2xl:text-lg md:text-base font-normal xl:mt-[32px] mt-[20px]">{Benifit.desc2}</div>
        <div className="flex flex-row 2xl:gap-[50px] md:gap-[20px] gap-[10px] 2xl:mt-[32px] mt-[20px]">
          {Benifit.options.map((option) => {
            return (
              <div key={option.id}>
                <div className="flex flex-row items-center font-bold 2xl:text-[32px] lg:text-2xl md:text-base text-[#FA8B02]">
                  {option.number}
                  <span className="2xl:text-xl text-sm">
                    <FaPlus />
                  </span>
                </div>
                <div className="xl:text-sm lg:text-xs text-[10px] font-normal text-[#00000099] mt-[6px]">
                  {option.desc}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default BenifitsComponent;

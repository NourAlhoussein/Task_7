import Image from "next/image";
import img from "../../public/images/image3.png";
function SpecialOffers() {
  return (
    <div
      className="flex flex-row items-center lg:justify-start justify-center w-full xl:h-[450px] h-[400px]
      bg-gradient-to-t from-[#FFB984] to-[#FDD0A2] relative
    2xl:px-[250px] xl:px-[100px] md:px-[50px] px-[15px]"
    >
      <div
        className="flex flex-col items-center justify-between p-[30px] bg-[#FFD8B8] text-center 
      w-[560px] rounded-[24px]"
      >
        <h1 className="2xl:text-[32px] md:text-2xl text-xl font-extrabold">
          Get Special Offers for Organizations
        </h1>
        <div className="2xl:mt-[32px] mt-[20px] font-normal 2xl:text-lg md:text-base">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s.
        </div>
        <button
          className="2xl:mt-[32px] mt-[20px] px-[24px] py-[10px]
         rounded-[50px] bg-[#FA8B02] text-white font-semibold 2xl:text-xl text-sm cursor-pointer"
        >
          Conatct Us
        </button>
      </div>
      <Image
        className="absolute xl:w-[420px] w-[350px] bottom-0 left-[75%] -translate-x-[50%] lg:flex hidden"
        src={img}
        alt="special offers"
      />
    </div>
  );
}

export default SpecialOffers;

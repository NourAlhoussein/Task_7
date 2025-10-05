import Image from "next/image";
import BuyForm from "./BuyForm";
function BikeComponent() {
  return (
    <div
      className="flex flex-row items-center lg:justify-start justify-center w-full
    2xl:h-[650px] xl:h-[590px] lg:h-[480px] md:h-[450px] 
    bg-gradient-to-t from-[#FFB984] to-[#FDD0A2] relative
    2xl:px-[250px] xl:px-[100px] md:px-[50px] px-[15px] lg:p-0 p-[30px]"
    >
      <div className="flex-1 flex flex-col items-center justify-center">
        <div className="2xl:text-[32px] md:text-2xl text-xl font-extrabold">
          Book Now Bike
        </div>
        <div className="flex flex-col items-center justify-center bg-[#FFFFFF4D]
         w-full rounded-[24px] mt-[36px] 2xl:p-[34px] p-[25px]">
          <BuyForm />
          <button
            className="2xl:mt-[40px] mt-[20px] px-[24px] py-[10px]
         rounded-[50px] bg-[#FA8B02] text-white font-semibold 2xl:text-xl text-sm cursor-pointer"
          >
            Book Now
          </button>
        </div>
      </div>
      <div className="flex-1 lg:flex hidden">
        <img className="2xl:mt-[215px] xl:mt-[200px] lg:mt-[150px] md:mt-[140px]" src="/images/bike.png" alt="Book Buy Bike" />
      </div>
    </div>
  );
}

export default BikeComponent;

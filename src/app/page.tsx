import Image from "next/image";
import ToorsComponent from "../components/ToorsComponent";
import DestinationGrid from "@/components/DestinationGrid";
import BenifitsComponent from "@/components/BenifitsComponent";
import { benifits } from "@/data/benifits";
import SpecialOffers from "@/components/SpecialOffers";
import ServicesComponent from "@/components/ServicesComponent";
import BikeComponent from "@/components/BikeComponent";
import Packages from "@/components/Packages";
import Customers from "@/components/Customers";
export default function Home() {
  return (
    <div>
      {/* section 1 */}

      <div className="2xl:px-[250px] xl:px-[100px] md:px-[50px] px-[15px] md:py-[100px] py-[50px]
      w-full md:h-[100vh] bg-[url(/images/home.png)] bg-cover">
          <div className="flex flex-col items-center justify-center w-full">
            <h1 className="2xl:text-7xl text-5xl text-white 2xl:mt-[160px] mt-[100px] text-center Podcast">
              Enjoy in the best way!
            </h1>
            <div className="2xl:text-2xl font-bold text-white mt-[16px] text-center">
              Enjoy our services for your trip anytime
            </div>
            <div className="2xl:mt-[60px] mt-[30px]">
              <ToorsComponent />
            </div>
          </div>
      </div>

      {/* section 2 */}

      <div className="2xl:px-[250px] xl:px-[100px] md:px-[50px] px-[15px]">
        <div className="2xl:mt-[215px] xl:mt-[100px] sm:mt-[60px] mt-[40px]">
          <DestinationGrid />
        </div>
      </div>

      {/* section 3 */}

      <div className="2xl:px-[250px] xl:px-[100px] md:px-[50px] px-[15px]">
        <div className="2xl:mt-[215px] xl:mt-[100px] sm:mt-[60px] mt-[40px]">
          <BenifitsComponent Benifit={benifits.places[0]} />
        </div>
      </div>

      {/* section 4 */}

      <div className="2xl:mt-[215px] xl:mt-[200px] sm:mt-[60px] mt-[40px]">
        <SpecialOffers />
      </div>

      {/* section 5 */}

      <div className="2xl:px-[250px] xl:px-[100px] md:px-[50px] px-[15px]">
        <div className="2xl:mt-[215px] xl:mt-[100px] sm:mt-[60px] mt-[40px]">
          <ServicesComponent />
        </div>
      </div>

      {/* section 6 */}

      <div className="2xl:mt-[215px] xl:mt-[100px] sm:mt-[60px] mt-[40px]">
        <BikeComponent />
      </div>

      {/* section 7 */}

      <div className="2xl:px-[250px] xl:px-[100px] md:px-[50px] px-[15px]">
        <div className="2xl:mt-[215px] xl:mt-[120px] sm:mt-[60px] mt-[40px]">
          <Packages />
        </div>
      </div>

      {/* section 8 */}

      <div className="2xl:px-[250px] xl:px-[100px] md:px-[50px] px-[15px]">
        <div className="2xl:mt-[215px] xl:mt-[100px] sm:mt-[60px] mt-[40px]">
          <Customers />
        </div>
      </div>
    </div>
  );
}

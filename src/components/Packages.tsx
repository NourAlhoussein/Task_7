import { packages } from "@/data/packages";
import PackageCard from "./PackageCard";
function Packages() {
  return (
    <div className="flex flex-col items-center ">
      <div className="font-extrabold 2xl:text-[32px] md:text-2xl text-xl w-full sm:text-left text-center">
        The Most Popular Packages
      </div>
      <div
        className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 w-full items-start justify-center gap-[20px]
      sm:mt-[60px] mt-[40px]"
      >
        {packages.map((p) => {
          return <PackageCard key={p.id} p={p} />;
        })}
      </div>
    </div>
  );
}

export default Packages;

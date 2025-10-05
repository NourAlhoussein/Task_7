import Image from "next/image";
import { Customer } from "@/data/customers";
import { SiComma } from "react-icons/si";
function CustomerCard({ c }: { c: Customer }) {
  return (
    <div className="flex flex-col items-center justify-center sm:p-[30px] p-[10px] border-1 border-black/10 rounded-[24px]">
      <Image
        className="w-[80px] h-[80px] rounded-full"
        src={c.image}
        alt={c.name}
      />
      <div className="mt-[15px] text-lg font-normal">{c.name}</div>
      <div className="flex flex-row items-center justify-start w-full text-[#FEE9DA] text-3xl">
        <SiComma />
        <SiComma />
      </div>
      <div className="mt-[15px] text-lg font-normal">
        {c.desc} {c.id}
      </div>
      <div className="flex flex-row items-center justify-end w-full text-[#FEE9DA] text-3xl">
        <SiComma />
        <SiComma />
      </div>
    </div>
  );
}

export default CustomerCard;

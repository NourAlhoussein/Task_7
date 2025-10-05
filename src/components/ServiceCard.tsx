import { StaticImageData } from "next/image";
import Image from "next/image";
interface ServiceProps {
  id: number;
  image: string | StaticImageData;
  title: string;
  description: string;
}
function ServiceCard({ service }: { service: ServiceProps }) {
  return (
    <div className="flex flex-col items-start justify-start w-full gap-[20px]">
      <Image
        className="w-full rounded-[24px]"
        src={service.image}
        alt={service.title}
      />
      <h1 className="font-bold 2xl:text-2xl text-xl">{service.title}</h1>
      <div className="font-normal 2xl:text-lg text-base">
        {service.description}
      </div>
    </div>
  );
}

export default ServiceCard;

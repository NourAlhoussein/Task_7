import { Services } from "@/data/Services";
import ServiceCard from "./ServiceCard";

function ServicesComponent() {
  return (
    <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 items-start justify-center gap-[33px]">
      {Services.map((service) => {
        return <ServiceCard key={service.id} service={service} />;
      })}
    </div>
  );
}

export default ServicesComponent;

import ServiceCard from "@/components/ServiceCard";
import { services } from "@/utils/mokap";
import Image from "next/image";

const Services = () => {
  return (
<section className=" max-container flex justify-center  flex-wrap  gap-9">

  {
    services.map((e)=>(
                <ServiceCard key={e.label} {...e} />
    ))
  }

</section>
  );
};

export default Services;

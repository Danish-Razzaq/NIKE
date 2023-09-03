import { SuperButton } from "@/components/heroButton";
import Image from "next/image";
import { shoe8 } from "../../../public/images";

const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className=" flex  justify-between items-center  max-lg:flex-col gap-10 w-full max-container"
    >
      <div className="flex flex-col flex-1">
        <h2 className="mt-10 text-5xl max-xl:text-4xl  font-bold  max-xl:max-w-lg my-1">
          We Provide You <br className="hidden max-xl:block" /> <span className="text-[#ff6452] mr-3 font-bold max-xl:text-4xl text-5xl flex-wrap">Super</span> <br className=" max-xl:hidden" />
          <span className="text-[#ff6452] mr-3 font-bold  text-5xl max-xl:text-4xl flex-wrap">
            Quality
          </span>
          <span className=" max-xl:text-4xl flex-wrap text-5xl ">Shoes </span>
        </h2>
        <p className="mt-4 lg:max-w-lg text-lg leading-7">
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.
        </p>
        <p className="mt-6 lg:max-w-lg text-lg leading-7">
          Our dedication to detail and excellence ensures your satisfaction
        </p>
        <div className="mt-11">
          <SuperButton  name='View Details'  />
        </div>
      </div>
 
     <div className="flex justify-center items-center flex-1">
   <Image  src={shoe8} alt="Shoe8" width={570} height={522} className="object-contain"></Image>
     </div>

    </section>
  );
};

export default SuperQuality;

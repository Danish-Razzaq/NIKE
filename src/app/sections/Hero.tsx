'use client'
import { Button } from "@/components/ui/button";
import HeroButton from "@/components/heroButton";
import { statistics,  shoes } from "@/utils/mokap";
import Image, { StaticImageData } from "next/image";
import { bigShoe1 } from "../../../public/images";
import ShoeCard from "@/components/ShoeCARD";
import { SetStateAction, useState } from "react";




const Hero = () => {

   const [bigShoImg, setBigShoImg] = useState(bigShoe1);
  return (
    <section
      id="home"
      className="w-full max-container flex flex-col justify-center xl:flex-row  items-center min-h-screen gap-10 "
    >
      <div className="relative xl:w-2/5  flex flex-col justify-center items-start w-full max-xl:padding-x  pt-28 ">
        <p className="text-xl text-[#ff6452] ">Our Summer Collections</p>
        <h1 className="mt-10 text-8xl max-sm:text-[72px]   text-bold  font-serif">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 md:pr-12  max-md:pr-24 max-xl:text-4xl flex-wrap">
            The New Arrival
          </span>{" "}
          <br />
          <span className="text-[#ff6452]  max-xl:text-4xl flex-wrap">Nike</span><span className=" max-xl:text-4xl flex-wrap"> Shoes
            </span>
        </h1>
        <p className="text-slate-500 leading-8 text-lg mt-6 mb-6 sm:max-w-sm ">
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life
        </p>
        <HeroButton />

        <div className=" flex justify-start items-start flex-wrap w-full mt-10 md:gap-16 max-xl:gap-6 font-bold  ">
          {statistics.map((e) => (
            <div key={e.label}>
              <p className="md:text-4xl max-xl:text-2xl ">{e.value}</p>
              <p className="leading-7">{e.label}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="relative flex-1 flex  justify-center items-center xl:min-h-screen  max-xl:py-40  bg-slate-200 bg-hero bg-center  ">
        <Image src={bigShoImg} alt='Img' width={600} height={500} className="relative object-contain z-10 " />

      <div className="absolute justify-normal items-center pl-14   flex sm:gap-6 gap-4 -bottom-[8%] sm:left-[''] max-sm:px-6">
          {
           shoes.map((e)=>(
            <div key={e.id}>{

             <ShoeCard   imgURL={e}
             changeBigShoeImage={(e: SetStateAction<StaticImageData>)=>{setBigShoImg(e)}}
             bigShoeImg={bigShoImg} />

              // <Image src={e.thumbnail} alt="img" className="bg-purple-400 space-x-5 m-3" />
            }
            </div>
           ))

          }

      </div>
      </div>

    </section>
  );
};

export default Hero;

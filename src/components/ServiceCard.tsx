import { StaticImageData } from 'next/image';
import  Image  from 'next/image';
import React from 'react';

interface services {
    imgURL:StaticImageData,
    label:string,
    subtext:string
}

const ServiceCard = ({imgURL,label,subtext}:services) => {
  return (
    <div className=' flex-1 sm:w-[350px] sm:min-w-[350px]  w-full rounded-[20px]   shadow-2xl px-9 py-14  '>
        <div className='w-11 h-11 flex justify-center items-center bg-[#ff6452] rounded-full'>
          <Image src={imgURL} alt='img' />
        </div>
                <h3 className="text-lg mt-5 font-bold">{label}</h3>
                 <p className="text-slate-400 mt-3 break-words ">{subtext}</p> 
      
    </div>
  );
}

export default ServiceCard;

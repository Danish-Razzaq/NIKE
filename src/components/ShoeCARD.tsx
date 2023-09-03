'use client'
import { StaticImageData } from 'next/image';
import React from 'react';
import Image from 'next/image';

interface img {
  // imgURL: StaticImageData
  // changeBigsho: (bigShoe: string) => void; // Assuming changeBigsho is a function that accepts a string
  // bigshoImg: string;
}

const ShoeCard = ({ imgURL, changeBigShoeImage, bigShoeImg }:any)=> {
  const handleClick = () => {
    if (bigShoeImg != imgURL.bigShoe) {
      changeBigShoeImage(imgURL.bigShoe);
    }
  };

  return (
    // <div>'sho card'</div>
    <div
      className={`border-2 rounded-xl ${
        bigShoeImg === imgURL.bigShoe ? 'border-red-500' : 'border-transparent'
      } cursor-pointer max-sm:flex-1 `}
      onClick={handleClick}
    >
      <div  className='flex justify-center items-center  sm:w-36 sm:h-34 p-1  '>
        <Image src={imgURL.thumbnail}         alt='shoe collection'
          width={137}
          height={103.34} className=' p-3   bg-slate-400   bg-cover rounded-xl' />
      </div>
    </div>
  );
};

export default ShoeCard;

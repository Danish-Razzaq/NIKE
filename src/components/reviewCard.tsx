import Image, { StaticImageData } from 'next/image';
import React from 'react';
import { star } from '../../public/icons';
interface feedbacks{
  imgUrl:StaticImageData ,
  customerName:string ,
  rating:number,
  feedback:string
}

const reviewCard = ({imgUrl,customerName,rating,feedback}:feedbacks) => {
  return (
    <div className='flex justify-center items-center flex-col'>
      <Image
        src={imgUrl}
        alt='customer'
        className='rounded-full object-cover w-[120px] h-[120px]'
      />
      <p className='mt-6 max-w-sm text-center text-lg leading-7 text-slate-400'>{feedback}</p>
      <div className='mt-3 flex justify-center items-center gap-2.5'>
        <Image
          src={star}
          width={24}
          height={24}
          alt='rating star'
          className='object-contain m-0'
        />
        <p className='text-xl font-montserrat text-gray-600'>({rating})</p>
      </div>
      <h3 className='mt-1  text-3xl text-center font-bold'>
        {customerName}
      </h3>
    </div>
  );
}

export default reviewCard;

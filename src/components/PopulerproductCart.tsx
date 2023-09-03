import Image, { StaticImageData } from 'next/image';
import React from 'react';
import { star } from '../../public/icons';

interface products {
    imgURL:StaticImageData,
    name:string,
    price:string
}

const PopulerproductCart = ({imgURL,name,price}:products) => {
  return (
    <div className=' flex flex-1 flex-col w-full max-sm:w-full'>
        
        <Image src={imgURL} alt='img'className='w-[280px] h-[280px]' />
        <div className='mt-8  justify-start gap-2.5'>
        <span className='flex gap-2 items-center '>

        <Image src={star}  alt='star'/>
        <p className='text-xl leading-normal text-slate-400 font-semibold' >4.5</p>
        </span>
        <h3 className='mt-2 text-2xl leading-normal font-semibold' >{name}</h3>
        <p className='mt-2 text-2xl text-red-500 leading-normal font-semibold'>{price}</p>
        </div>

    </div>

  );
}

export default PopulerproductCart;

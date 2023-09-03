import { SuperButton } from "@/components/heroButton";


const Subscribe = () => {
  return (
<section className="max-container flex justify-between items-center max-lg:flex-col gap-10" id="Contact_US">
<h3 className="text-3xl leading-[68px] lg:max-w-md font-extrabold">Sign Up for <span className="text-[#ff6452] "> Updates</span> & Newsletter </h3>
<div className='lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-gray-300 rounded-full'>
  <input type="text" placeholder="Subscribe@nike.com" className=" sm:flex-1 max-sm:w-full text-base leading-normal text-slate-gray pl-5 max-sm:p-5 outline-none sm:border-none border max-sm:border-slate-gray max-sm:rounded-full;" />
<div className="flex max-sm:justify-end max-sm:w-full items-center">
    <SuperButton name='signUp' />
</div>
</div>
   </section>
    
  );
};

export default Subscribe;

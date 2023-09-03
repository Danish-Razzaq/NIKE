import HeroButton, { SuperButton, SuperOffer } from "@/components/heroButton";
import Image from "next/image";
import { offer } from "../../../public/images";

const SpecialOffer = () => {
  return (
    <section className="flex flex-wrap items-center max-xl:flex-col-reverse gap-10">
      <div className="flex-1 ">
        <Image
          src={offer}
          alt="img"
          width={773}
          height={687}
          className="object-contain w-full"
        />
      </div>

      <div className="flex flex-col flex-1">
        <h2 className="mt-10 text-5xl max-xl:text-4xl  font-bold  max-xl:max-w-lg my-1">
          <span className="text-[#ff6452] mr-3 font-bold max-xl:text-4xl text-5xl flex-wrap">
            Special
          </span>{" "}
          <br className=" max-xl:hidden" />
          <span className="mr-3 font-bold  text-5xl max-xl:text-4xl flex-wrap">
            Offer
          </span>
        </h2>
        <p className="mt-4 lg:max-w-lg text-lg leading-7">
          Embark on a shopping journey that redefines your experience with
          unbeatable deals. From premier selections to incredible savings, we
          offer unparalleled value that sets us apart.
        </p>
        <p className="mt-6 lg:max-w-lg text-lg leading-7">
          Navigate a realm of possibilities designed to fulfill your unique
          desires, surpassing the loftiest expectations. Your journey with us is
          nothing short of exceptional.
        </p>
        <div className="mt-11 flex flex-wrap gap-3 ">
          <SuperButton name="Shop Now" />
          <SuperOffer name="Learn more" />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;

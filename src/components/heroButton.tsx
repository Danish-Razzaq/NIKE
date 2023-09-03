import Image from "next/image";
import { Button } from "./ui/button";

import { arrowRight } from "../../public/icons";

const HeroButton = () => {
  return (
    <div>
        <Button className=" flex bg-[#ff6452] rounded-full">Shop Now
      <Image src={arrowRight} alt="=>" className="m-2" />
        </Button>
    </div>
  );
}
const SuperButton = ({name}:any) => {
  return (
    <div>
        <Button className=" flex bg-[#ff6452] rounded-full">{name}
     
        </Button>
    </div>
  );
}
const SuperOffer = ({name}:any) => {
  return (
    <div>
        <Button className=" flex bg-white border border-black rounded-full">{name}
     
        </Button>
    </div>
  );
}

export {SuperButton ,SuperOffer}
export default HeroButton;

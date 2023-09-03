import { reviews } from "@/utils/mokap";
import ReviewCard from "@/components/reviewCard";
const CustomerReviews = () => {
  return (
    <section className="max-container ">
      <h3 className=" text-center text-4xl font-bold">
        What are
        <span className="text-[#ff6452]"> Customers </span>
        Say?
      </h3>
      <p className='m-auto mt-4 max-w-lg  text-center text-lg leading-7 text-gray-400'>
        Hear genuine stories from our satisfied customers about their
        exceptional experiences with us.
      </p>
      <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">

        {
          reviews.map((review)=>(
              <ReviewCard  key={review.customerName}
                imgUrl={review.imgURL}
              {...review}
               />
          ))
        }
      </div>

    </section>
  );
};

export default CustomerReviews;

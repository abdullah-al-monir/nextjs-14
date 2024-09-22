'use client'
import { notFound } from "next/navigation";
function getRandomInt(count) {
  return Math.floor(Math.random() * count);
}
const ReviewDetails = ({ params }) => {
  const random = getRandomInt(2)
  if(random === 1 ){
    throw new Error("Error landing review");
    
  }
  if (parseInt(params.reviewId) > 500) {
    notFound();
  }
  return (
    <div>
      Review  ID  : {params.reviewId} for product {params.id}
    </div>
  );
};

export default ReviewDetails;
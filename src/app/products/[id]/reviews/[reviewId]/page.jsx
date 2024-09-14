import { notFound } from "next/navigation";
const ReviewDetails = ({ params }) => {
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
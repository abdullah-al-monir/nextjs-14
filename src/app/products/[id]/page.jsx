
export const generateMetadata = ({ params }) => {
  return {
    title: `Product ${params.id}`
  }
}
const ProductDetails = ({ params }) => {
  const id = params.id;
  return (
    <div>
      Details: {id}
    </div>
  );
};

export default ProductDetails;
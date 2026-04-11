import { useParams } from "react-router-dom";

function ProductDetailPage() {
  const parsms = useParams();

  return (
    <>
      <h1>Product Details!</h1>
      <p>{parsms.productId}</p>
    </>
  );
}

export default ProductDetailPage;

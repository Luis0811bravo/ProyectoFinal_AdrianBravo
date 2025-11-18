import { useGetProduct } from "../hooks/useGetProduct";
import ProductDetail from "./ProductDetail";
import { useParams } from "react-router-dom";

const ProductDetailContainer = () => {
  const { productId } = useParams();
  const { product, loading } = useGetProduct(productId);

  if (loading) {
    return <h2>Cargando productos...</h2>;
  }

  return (
    <>
        <ProductDetail product={product} />
    </>
  );
}

export default ProductDetailContainer;
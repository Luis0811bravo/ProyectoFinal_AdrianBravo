import { useGetProducts } from "../hooks/useGetProducts";
import ProductItem from "./ProductItem";
import { useParams } from "react-router-dom";
import LoaderComponent from "./LoaderComponent";

const ProductsListContainer = ({ mensaje }) => {
  const { categoryId } = useParams();
  const { productsFilteredByCategory, loading } = useGetProducts(categoryId);

  if (loading) {
    return <LoaderComponent />;
  }

  return (
    <>
      <h2 className="mensaje-bienvenida">{mensaje}</h2>
      <div className="product-list-container">
        {productsFilteredByCategory?.map(product => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </>
  );
}

export default ProductsListContainer;
import { useGetProducts } from "../hooks/useGetProducts";
import ProductItem from "./ProductItem";
import { useParams } from "react-router-dom";
import LoaderComponent from "./LoaderComponent";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../services/firebase";
import { products } from "../data/products.js";

const ProductsListContainer = ({ mensaje }) => {
  const { categoryId } = useParams();
  const { productsFilteredByCategory, loading } = useGetProducts(categoryId);

  if (loading) {
    return <LoaderComponent />;
  }

  // const subirData = () => {
  //   console.log('Subiendo data...');
  //   const coleccionASubir = collection(db, 'products');
  //   products.map( (prod) => 
  //     addDoc(coleccionASubir, prod))
  //   };




  return (
    <>
    {/* <button onClick={subirData}>Subir Data</button> */}
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
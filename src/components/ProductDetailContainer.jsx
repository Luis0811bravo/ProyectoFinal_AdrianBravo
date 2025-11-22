import ProductDetail from "./ProductDetail";
import { Link, useParams } from "react-router-dom";
import LoaderComponent from "./LoaderComponent";
import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../services/firebase";

const ProductDetailContainer = () => {
  const { productId } = useParams();
  const [detalle, setDetalle] = useState({});
  const [cargando, setCargando] = useState(true);
  const [invalid, setInvalid] = useState(false);

  useEffect(() => {
    setCargando(true);
    // creamos la referencia
    const docRef = doc(db, "products", productId);
    // traer ese doc
    getDoc(docRef)
      .then((res) => {
        if (res.data()) {
          setDetalle({ id: res.id, ...res.data() });
        } else {
          setInvalid(true);
        }
      })
      .catch((error) => console.log(error))
      .finally(() => setCargando(false));
  }, [productId]);

  if (invalid) {
    return (
      <div className="container">
        <div className="empty-cart">
          <h2>Producto no encontrado!!</h2>
          <Link to="/" className="btn-add">Volver al inicio</Link>
        </div>
      </div>
    );
  }

  if (cargando) {
    return <LoaderComponent />;
  }

  return (
    <>
      <ProductDetail product={detalle} />
    </>
  );
}

export default ProductDetailContainer;
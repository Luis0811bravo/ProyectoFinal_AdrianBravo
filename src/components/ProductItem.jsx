import Card from "./Card"
import { Link } from "react-router-dom";

const ProductItem = ( { product } ) => {
  return (
    <div className='container'>
      <Link to={`/product/${product.id}`}>
        <Card className="product-card">
          <div className="product-item">
            <h3>{product.name}</h3>
            <div className="img-container">
              <img src={product.img} alt={product.name} />
            </div>
            <div className="item__description">{product.descripcion}</div>
          </div>
        </Card>
      </Link>
    </div>
  )
}

export default ProductItem
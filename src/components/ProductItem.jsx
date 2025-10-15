import Card from "./Card"

const ProductItem = ( { product } ) => {
  return (
    <div className='container'>
        <Card className="product-card">
          <div className="product-item">
            <h3>{product.name}</h3>
            <div className="img-container">
              <img src={product.img} alt={product.name} />
            </div>
            <div className="item__description">{product.descripcion}</div>
          </div>
        </Card>
    </div>
  )
}

export default ProductItem
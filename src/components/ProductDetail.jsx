

const ProductDetail = ({ product }) => {
  return (
    <div>
      <h2>{product.name}</h2>
      <img src={product.img} alt={product.name} />
      <p>{product.description}</p>
      <p>Precio: ${product.price}</p>
    </div>
  )
}

export default ProductDetail
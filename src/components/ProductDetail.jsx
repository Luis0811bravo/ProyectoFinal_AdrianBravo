import React from 'react';
import ItemCount from './ItemCount';


const ProductDetail = ({ product }) => {
  const onAdd = (cantidad) => {
    console.log(`Agregaste ${cantidad} unidades al carrito.`);
  };

  if (!product) {
    return (
      <div className="container">
        <h2>Producto no encontrado</h2>
      </div>
    );
  }

  return (
    <div className="container product-detail-wrapper">
      <div className="product-detail-card">
        <h2 className="product-detail-title">{product.name}</h2>

        <div className="product-detail-grid">
          <div className="product-detail-img">
            <img src={product.img} alt={product.name} />
          </div>

          <div className="product-detail-info">
            <p className="product-description">{product.descripcion}</p>
            <p className="price">Precio: <span>${typeof product.precio === 'number' ? product.precio.toFixed(2) : product.precio}</span></p>

            <div className="product-actions">
              <ItemCount stock={product.stock ?? (product.disponible ? 10 : 0)} onAdd={onAdd} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail
import React from 'react';
import { Link } from 'react-router-dom';

const EmptyCart = () => {
  return (
    <div className="container">
      <div className="empty-cart">
        <h2>Tu carrito está vacío</h2>
        <p>Explora nuestros productos y agrega algunos a tu carrito.</p>
        <Link to="/categories" className="btn-add">Ver Productos</Link>
      </div>
    </div>
  )
}

export default EmptyCart
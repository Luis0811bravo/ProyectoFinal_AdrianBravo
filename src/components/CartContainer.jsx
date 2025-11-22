import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import EmptyCart from './EmptyCart';
import { Link } from 'react-router-dom';

// Componente para mostrar los items del carrito
const CartView = () => {
  const { cart, deleteItem, removeList, getTotal } = useContext(CartContext);
  
  return (
    <div className="container">
      <div className="cart-view">
        <h2>Tu Carrito</h2>
        <div className="cart-items">
          {cart.map(item => (
            <div key={item.id} className="cart-item">
              <img src={item.img} alt={item.name} />
              <div className="cart-item-info">
                <h3>{item.name}</h3>
                <p>Cantidad: {item.cantidad}</p>
                <p>Precio unitario: ${item.precio}</p>
                <p>Subtotal: ${(item.precio * item.cantidad).toFixed(2)}</p>
              </div>
              <button 
                className="btn-remove" 
                onClick={() => deleteItem(item.id)}
              > Eliminar
              </button>
            </div>
          ))}
        </div>
        <div className="cart-total">
          <h3>Total: ${getTotal()}</h3>
        </div>
        <div className="cart-actions">
          <button className="btn-clear" onClick={removeList}>
            Vaciar carrito
          </button>
          <Link to="/checkout" className="btn-checkout">
            Proceder al pago
          </Link>
        </div>
      </div>
    </div>
  );
};

const CartContainer = () => {
  const { cart } = useContext(CartContext);
  
  return (
    <div>
      {!cart.length ? <EmptyCart /> : <CartView />}
    </div>
  );
};

export default CartContainer;
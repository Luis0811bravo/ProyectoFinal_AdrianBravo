import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';

const CartView = () => {
    const { cart, deleteItem, removeList, getTotal } = useContext(CartContext);
  return (
    <div>
        <h2>Tu carrito de Compras</h2>
        {cart.map((item) => (
            <div key={item.id} className="cart-item">
                <img src={item.img} alt={item.name} />
                <div className="cart-item-info">
                    <h3>{item.name}</h3>
                    <p>Cantidad: {item.cantidad}</p>
                    <p>Precio: ${item.precio}</p>
                    <button className="btn-remove" onClick={() => deleteItem(item.id)}>Eliminar</button>
                </div>
            </div>
        ))}
        <div className="cart-total">
            <h3>Total: ${getTotal()}</h3>
        </div>
        <div className="cart-actions">
            <button className="btn-clear" onClick={removeList}>Vaciar Carrito</button>
            <Link to="/checkout" className="btn-checkout">Proceder al pago</Link>
        </div>
    </div>
  )
}

export default CartView
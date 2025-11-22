import React, { useContext, useState } from 'react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { CartContext } from '../context/CartContext';
import { db } from '../services/firebase';
import { Link } from 'react-router-dom';
import EmptyCart from './EmptyCart';

const Checkout = () => {
    const [buyer, setBuyer] = useState({
        name: '',
        lastname: '',
        address: '',
        mail: '',
        secondmail: ''
    });

    const [orderId, setOrderId] = useState(null);
    const [checkMail, setCheckMail] = useState('');
    const { cart, getTotal, removeList } = useContext(CartContext);

    const buyerData = (e) => {
        setBuyer({
            ...buyer,
            [e.target.name]: e.target.value
        });
    }

    const finalizarCompra = (e) => {
        e.preventDefault();
        if (!buyer.name || !buyer.lastname || !buyer.address || !buyer.mail || !buyer.secondmail) {
            alert('Por favor, completa todos los campos del formulario.');
            return;
        } else if (buyer.mail !== checkMail) {
            alert('Los emails no coinciden. Por favor, verifícalos.');
            return;
        } else {
            let order = {
                comprador: buyer,
                compras: cart,
                total: parseFloat(getTotal()),
                fecha: serverTimestamp()
            };

            const ventas = collection(db, 'orders');
            addDoc(ventas, order)
            .then((res) => {
                setOrderId(res.id); 
                removeList();
            })
            .catch((error) => {
                console.log('Error al finalizar la compra:', error);
            });
        }


        if (!cart.length && !orderId) {
            return (<EmptyCart />);
        }
    }



    return (
        <>   
            {orderId 
                ? <div className="container">
                    <div className="checkout-success">
                        <h2>¡Realizaste correctamente tu compra!</h2>
                        <p>Tu número de orden es: <strong>{orderId}</strong></p> 
                        <Link to="/" className="btn-add">Volver al inicio</Link>
                    </div>
                  </div>
                : <div className="container">
                    <div className="checkout-minimal">
                        <h1>Datos de contacto</h1>
                        
                        <form className="minimal-form" onSubmit={finalizarCompra}>
                            <input 
                                name="name" 
                                className="minimal-input" 
                                type="text" 
                                placeholder="Nombre" 
                                onChange={buyerData}
                                value={buyer.name}
                                required
                            />
                            
                            <input 
                                name="lastname" 
                                className="minimal-input" 
                                type="text" 
                                placeholder="Apellido" 
                                onChange={buyerData}
                                value={buyer.lastname}
                                required
                            />

                            <input 
                                name="address" 
                                className="minimal-input" 
                                type="text" 
                                placeholder="Dirección" 
                                onChange={buyerData}
                                value={buyer.address}
                                required
                            />

                            <input 
                                name="mail" 
                                className="minimal-input" 
                                type="email" 
                                placeholder="Email" 
                                onChange={buyerData}
                                value={buyer.mail}
                                required
                            />
                            
                            <input 
                                name="secondmail" 
                                className="minimal-input" 
                                type="email" 
                                placeholder="Confirmar email" 
                                onChange={(e) => setCheckMail(e.target.value)}
                                value={checkMail}
                                required
                            />

                            <button type="submit" className="minimal-btn">
                                Completar compra
                            </button>
                        </form>
                    </div>
                  </div>
            }
        </>
    );
};

export default Checkout;
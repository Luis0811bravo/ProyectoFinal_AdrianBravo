import { collection, serverTimestamp } from 'firebase/firestore';
import { useContext, useState } from 'react';

const Checkout = () => {
    const [buyer, setBuyer] = useState({
        name: '',
        lastname: '',
        address: '',
        mail: '',
        secondmail: ''
    });

    const [orderId, setOrderId] = useState(null);

    const {cart, total, removeList} = useContext(CartContext);

    const buyerData = (e) => {
        setBuyer({
            ...buyer,
            [e.target.name]: e.target.value
        });
    }

    const finalizarCompra = (e) => {
        e.preventDefault();
        let order = {
            comprador: buyer,
            compras: cart,
            total: total(),
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



    return (
       <>   
        {orderId 
        ? <div>
            <h2>realizaste correctamente tu compra</h2>
            <p>Tu número de orden es: {orderId}</p> 
        </div>) 
        :  <div className="container">
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
                        onChange={buyerData}
                        value={buyer.secondmail}
                        required
                    />

                    <button type="submit" className="minimal-btn">
                        Completar compra
                    </button>
                </form>
            </div>
        </div>
        </>
    );
};

export default Checkout;
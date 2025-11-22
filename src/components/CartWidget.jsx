import cartIcon from "../assets/img/cart.png";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CartWidget = () => {
  const {cart, cartQuantity} = useContext(CartContext);

  return (
    <>
      {cart.length ? <div id="carrito">
        <img src={cartIcon} alt="Carrito de compras" />
        <span className="cart-count">{cartQuantity()}</span>
      </div> : <></>}
    </>

  );
}

export default CartWidget;
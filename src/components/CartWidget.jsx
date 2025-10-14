import cartIcon from "../assets/img/cart.png";

const CartWidget = () => {
  return (
    <div id="carrito">
      <img src={cartIcon} alt="Carrito de compras" />
    </div>
  );
}

export default CartWidget;
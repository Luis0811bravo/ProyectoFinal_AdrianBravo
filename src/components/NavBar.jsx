import CartWidget from "./CartWidget";


const NavBar = () => {
  return (
    <div>
      <nav>
        <a href="#">Inicio</a>
        <a href="#">Sobre Nosotros</a>
        <a href="#">Nuestros Productos</a>
        <a href="#">Contacto</a>
        <CartWidget />
      </nav>
    </div>
  );
}

export default NavBar;
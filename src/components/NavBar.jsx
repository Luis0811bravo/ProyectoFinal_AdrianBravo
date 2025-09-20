import CartWidget from "./CartWidget";


const NavBar = () => {
  return (
    <div>
      <nav>
        <a href="#">Inicio</a>
        <a href="#">Sobre Nosotros</a>
        <a href="#">Nuestros Cafés</a>
        <a href="#">Contacto</a>
      </nav>
      <CartWidget />
    </div>
  );
}

export default NavBar;
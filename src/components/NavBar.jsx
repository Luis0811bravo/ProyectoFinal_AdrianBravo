import CartWidget from "./CartWidget";
import { NavLink } from "react-router-dom";


const NavBar = () => {
  return (
    <div>
      <nav>
        <NavLink to="/home">Inicio</NavLink>
        <NavLink to="/categories">Categorías</NavLink>
        <NavLink to="/contact">Contacto</NavLink>
        <CartWidget />
      </nav>
    </div>
  );
}

export default NavBar;
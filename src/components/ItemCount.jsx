import { useState } from "react";

const ItemCount = ( { disponible,  onAdd } ) => {
  const [count, setCount] = useState(1);

  const sumar = () => {
    if (disponible && count < 10) { // Máximo 10 unidades cuando está disponible
      setCount(count + 1);
    }
  };

  const restar = () => {
    if (count > 1) { // Mínimo 1 unidad
      setCount(count - 1);
    }
  };

  const comprar = () => {
    onAdd(count);
  };

  return (
    <div>
      <button className="btn btn-danger" onClick={restar}>-</button>
      <span className="btn">{count}</span>
      <button className="btn btn-success" onClick={sumar}>+</button>
      <button className="btn btn-primary" onClick={comprar} disabled={!disponible || count === 0}>Agregar al carrito</button>
    </div>
  );
};

export default ItemCount;
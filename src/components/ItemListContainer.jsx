import Card from "./Card";

const ItemListContainer = ({ mensaje }) => {
  const categories = [
    { id: 1, name: 'Café Espresso', img: 'espresso.jpg', descripcion: 'Café fuerte y concentrado', categoria: 'café' },
    { id: 2, name: 'Café Latte', img: 'latte.jpg', descripcion: 'Café suave con leche', categoria: 'café' },
    { id: 3, name: 'Café Cappuccino', img: 'cappuccino.jpg', descripcion: 'Café con espuma de leche', categoria: 'café' },
    { id: 4, name: 'Café Americano', img: 'americano.jpg', descripcion: 'Café filtrado con agua caliente', categoria: 'café' },
    { id: 5, name: 'Café Mocha', img: 'mocha.jpg', descripcion: 'Café con chocolate y leche', categoria: 'café' },
    { id: 6, name: 'Café Macchiato', img: 'macchiato.jpg', descripcion: 'Café con un toque de leche', categoria: 'café' },
    { id: 7, name: 'Café Frappé', img: 'frappe.jpg', descripcion: 'Café frío con hielo y leche', categoria: 'café' },
    { id: 8, name: 'Tizana de frutas', img: 'tizana.jpg', descripcion: 'Bebida fría de frutas variadas', categoria: 'infusión' },
    { id: 9, name: 'Infusión de manzanilla', img: 'manzanilla.jpg', descripcion: 'Infusión relajante de manzanilla', categoria: 'infusión' },
    { id: 10, name: 'Té Verde', img: 'te_verde.jpg', descripcion: 'Té ligero y refrescante', categoria: 'té' },
    { id: 11, name: 'Té Negro', img: 'te_negro.jpg', descripcion: 'Té fuerte y aromático', categoria: 'té' },
  ]
  return (
    <div className='container'>
      <h2>{mensaje}</h2>
      <div className="item-list-container">
        {categories.map(category => (
            <Card key={category.id}>
              <div>
                <h3>{category.name}</h3>
                <div>
                  <img src={category.img} alt={category.name} />
                </div>
                <div>{category.descripcion}</div>
              </div>
            </Card>
        ))}
      </div>
      
    </div>
  );
}

export default ItemListContainer;
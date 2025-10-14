import { useGetCategories } from "../hooks/useGetCategories";
import Card from "./Card";
import CategoryItem from "./CategoryItem";

const ItemListContainer = ({ mensaje }) => {
  const { categories, loading } = useGetCategories();

  if (loading) {
    return <h2>Cargando categorías...</h2>;
  }

  return (
    <>
      <h2 className="mensaje-bienvenida">{mensaje}</h2>
      <div className="item-list-container">
        {categories?.map(category => (
          <CategoryItem key={category.id} category={category} />
        ))}
      </div>
    </>
  );
}

export default ItemListContainer;
import { useGetCategories } from "../hooks/useGetCategories";
import CategoryItem from "./CategoryItem";
import LoaderComponent from "./LoaderComponent";

const CategoriesListContainer = ({ mensaje }) => {
  const { categories, loading } = useGetCategories();

  if (loading) {
    return <LoaderComponent />;
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

export default CategoriesListContainer;
import Card from "./Card"
import { Link } from "react-router-dom"

const CategoryItem = ( { category }) => {
  return (
    <div className='container'>
      <Link to={`/products/${category.id}`}>
        <Card className="category-card">
          <div className="category-item">
            <h3>{category.name}</h3>
            <div className="img-container">
              <img src={category.img} alt={category.name} />
            </div>
            <div className="item__description">{category.description}</div>
          </div>
        </Card>
      </Link>
    </div>
  )
}

export default CategoryItem
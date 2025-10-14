import Card from "./Card"

const CategoryItem = ( { category }) => {
  return (
    <div className='container'>
        <Card>
          <div className="category-item">
            <h3>{category.name}</h3>
            <div className="img-container">
              <img src={category.img} alt={category.name} />
            </div>
            <div className="item__description">{category.descripcion}</div>
          </div>
        </Card>
    </div>
  )
}

export default CategoryItem
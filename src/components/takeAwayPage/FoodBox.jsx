

export const FoodBox = ({ food }) => {

    return (
        <div className="food-box-container">
            <img src={food.img} alt="" />
            <div className="details">
                <p className="food-name">{food.name}</p>
                <p className="food-ingredients">{food.ingredients}</p>
            </div>
            <p className="food-price">${food.price}</p>
        </div>
    )
}
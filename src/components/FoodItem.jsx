import React, { useContext } from 'react';
import { DishContext } from '../DishContext';


const FoodItem = ({ items }) => {
    const cartData = useContext(DishContext);

    const minusDishItem = (items) => {
        cartData.removeFromCart(items);
    };

    const addDishItem = (items) => {
        cartData.addToCart(items);
    };

    return (
        <div className="d-flex mb-10 bb-light-grey">
            <div className="food-type">
                {items.dish_Type == '2' ? <img src="../images/veg.png" alt="foodtype" /> : <img src="../images/non-veg.png" alt="foodtype" />}
            </div>
            <div className="food-details">
                <div className="food-title">
                    {items.dish_name}
                </div>
                <div className="food-price">
                    {items.dish_currency} {items.dish_price}
                </div>
                <div className="food-description">
                    {items.dish_description}
                </div>
                {items.dish_Availability &&
                    <div className="food-qty">
                        <span onClick={() => minusDishItem(items)}>-</span>
                        <span>{cartData.cartItems.find(item => item.dish_id === items.dish_id) ? cartData.cartItems.find(item => item.dish_id === items.dish_id).quantity : 0}</span>
                        <span onClick={() => addDishItem(items)}>+</span>
                    </div>
                }
                <div className="food-status">
                    {items.addonCat.length?'Customizations available':(items.dish_Availability ? '' : 'Not available')}
                </div>
            </div>
            <div className="food-calories">
                {items.dish_calories} calories
            </div>
            <div className="food-image" style={{ backgroundImage: `url(${items.dish_image})` }}>
                {/* <img src={items.dish_image} alt="foodIimage"/> */}
            </div>
        </div>
    )
}

export default FoodItem;

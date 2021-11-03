import React, { useState, useEffect } from 'react';
import Cart from './components/Cart';
import FoodCategory from './components/FoodCategory';
import { getList } from './services/service'


const Main = () => {
    const [foodItems, setFoodItems] = useState(null);
    const [foodCategory, setFoodCategory] = useState([]);
    const [selectedItem, setSelectedItem] = useState('');
    const [selectedCatId, setSelectedCatId] = useState('');


    const handleCategory = (category) => {
        setSelectedItem(category.menu_category);
        setSelectedCatId(category.menu_category_id);
    };

    useEffect(() => {
        (async () => {
            const listItems = await getList();
            setFoodItems(listItems);
            setFoodCategory(listItems[0].table_menu_list);
            setSelectedItem(listItems[0].table_menu_list[0].menu_category);
            setSelectedCatId(listItems[0].table_menu_list[0].menu_category_id);
            console.log('category', listItems);
        })();
    }, []);

    return (
        <div className="main-container">
            <div className="d-flex justify-content-space page-header">
                <div className="page-name">
                    {foodItems?foodItems[0].restaurant_name:""}
                </div>
                <div className="page-cart">
                    <span className="cart-name">
                        My Order
                    </span>
                    <Cart />
                </div>
            </div>
            <div className="d-flex dish-categories">
                {foodCategory.map(category => {
                    return (
                        <div className={`dish-category ${category.menu_category_id === selectedCatId ? 'active' : ''}`} onClick={() => handleCategory(category)}>
                            {category.menu_category}
                        </div>
                    );
                })}
            </div>
            {foodItems ? foodItems[0].table_menu_list.filter(items => items.menu_category === selectedItem).map(category => {
                return (
                    <FoodCategory category={category} />
                );
            }) : null}
        </div>
    );
}

export default Main;
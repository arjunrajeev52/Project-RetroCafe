import React,{useState} from 'react'
import FoodItem from './FoodItem';

const FoodCategory = ({ category}) => {

    return (
        <>
            {category ? category.category_dishes.map(items => {
                return (

                    <FoodItem items={items} />
                );
            }) : null}
        </>
    )
}

export default FoodCategory;

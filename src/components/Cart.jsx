import React, { useContext } from 'react'
import { DishContext } from '../DishContext'

const Cart = () => {
    const cartData = useContext(DishContext);
    return (
        <>
        <span>
            <img src="../images/cart.png" className="cart-icon" alt='cart'/>
            <span className="cart-count">{cartData.cart}</span>
        </span>
        </>
    )
}

export default Cart

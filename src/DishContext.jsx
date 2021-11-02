import React,{createContext, useEffect, useState} from 'react';

export const DishContext = createContext({
    cart:0,
    setCart:()=>{},
    cartItems:[],
    addToCart:()=>{},
    removeFromCart:()=>{}
});

export const DishProvider = (props) => {

    const [cart,setCart] = useState(0);
    const [cartItems,setCartItems] = useState([]);

    useEffect(()=>{
        setCart(cartItems.reduce((count,{quantity})=>count+quantity,0));
    },[cartItems])

    const addToCart = (product)=>{
        setCartItems(items=>{
            if(items.find(item=>item.dish_id === product.dish_id)){
                return items.map(item=>item.dish_id === product.dish_id?{...item,quantity:item.quantity+1}:item)
            }
            else{
                return [...items,{...product,quantity:1}]
            }
        })
    };

    const removeFromCart = (product)=>{
        setCartItems(items=>{
            const foundItem = items.find(item=>item.dish_id === product.dish_id);
            if(foundItem?.quantity>1){
                return items.map(item=>item.dish_id === product.dish_id?{...item,quantity:item.quantity - 1}:item)
            }else{
                return items.filter(item=>item.dish_id !== product.dish_id);
            }
        })
    };

    return (
        <DishContext.Provider value={{cart,addToCart,removeFromCart,cartItems}}>
            {props.children}
        </DishContext.Provider>
    )
}

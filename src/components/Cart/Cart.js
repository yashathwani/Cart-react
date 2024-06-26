import React from 'react';
import { useSelector } from 'react-redux';

const Cart = () => {
    const cart = useSelector((state)=>{
        return state.items;
    })
    let cartItems = Object.values(cart)
    console.log(cartItems)
    return (
        <div>
            <h2>Cart</h2>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <ul>
                    
                    {cartItems.map((item) => (
                        <li key={item.id}>
                            Name - {item.title}
                            Quantity: {item.quantity}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Cart;
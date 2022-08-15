import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
    return (
        <div>
            <p className='summery'>Order Summery</p>
                <div className='summery-info'>
                    <p>Selected Items: {cart.length}</p>
                    <p>Total Price: $0</p>
                    <p>Total Shipping Charge: $0</p>
                    <p>Tax: $0</p>
                    <h4>Grand Total: $0</h4>
                </div>
                <button className='clear-cart-btn'>
                    <p>Clear Cart</p>
                </button>
                <button className='review-cart-btn'>
                    <p>Review Order</p>
                </button>
        </div>
    );
};

export default Cart;
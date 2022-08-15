import React from 'react';
// import { deleteShoppingCart } from '../../utilities/fakedb';
import './Cart.css'


const Cart = ({cart,deleteShoppingCartBtn}) => {
    // console.log(cart);
    let total =0;
    let  totalShipping = 0;
    let quantity = 0;
    for(const product of cart){
        quantity = quantity + product.quantity
        total = total + product.price * product.quantity
        totalShipping =totalShipping + product.shipping
    }
    let tax  = (total * .1).toFixed(2);
    tax = parseFloat(tax)
    const totalPrice = totalShipping + total + tax;
    



    return (
        <div className='carts'> 
            <p className='summery-header'>Order Summery</p>
                <div className='summery-info'>
                    <p>Selected Items: {quantity}</p>
                    <p>Total Price: ${total}</p>
                    <p>Total Shipping Charge: ${totalShipping}</p>
                    <p>Tax: ${tax}</p>
                    <h4>Grand Total: ${totalPrice.toFixed(2)}</h4>
                </div>
                <button onClick={deleteShoppingCartBtn} className='clear-cart-btn'>
                    <p>Clear Cart</p>
                </button>
                <button className='review-cart-btn'>
                    <p>Review Order</p>
                </button>
        </div>
    );
};

export default Cart;
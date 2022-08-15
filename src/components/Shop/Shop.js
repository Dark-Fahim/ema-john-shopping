import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'


const Shop = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])

    useEffect( ()=>{
        fetch("products.json")
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])


    const handleAddToCart = (product)=>{
        console.log(product);
        const newCart = [...cart, product];
        setCart(newCart);
    }


    return (
        <div className='shop-container'>
            <div className="products">
                {
                    products.map(product => <Product 
                        product={product} 
                        key={product.id}
                        handleAddToCart={() =>handleAddToCart(product)}
                    ></Product>)
                }
            </div>
            <div className="carts">
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
        </div>
    );
};

export default Shop;
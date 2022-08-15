import React, { useEffect, useState } from 'react';
import { addToDb, deleteShoppingCart, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
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

    useEffect(()=>{
        const storedCart = getStoredCart();
        const savedCart = []
        for(const id in storedCart){
            const addedProduct = products.find(pd=> pd.id === id);
            if(addedProduct){
                const quantity = storedCart[id]
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct)
            }
        }
        setCart(savedCart)
    },[products])


    const handleAddToCart = (product)=>{
        let newCart = []
        const exist = cart.find(pd => pd.id === product.id)
        if(!exist){
            product.quantity = 1;
            newCart =  [...cart, product]
        }
        else{
            const rest = cart.filter(pd => pd.id !== product.id)
            exist.quantity = exist.quantity + 1;
            newCart = [...rest, exist]
        }



       
        setCart(newCart);
        addToDb(product.id)
    }

    const deleteShoppingCartBtn = ()=>{
        deleteShoppingCart()
        const newCart = []
        setCart(newCart)
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
            <div className="cart-container">
                <Cart cart={cart} deleteShoppingCartBtn={deleteShoppingCartBtn}></Cart>
            </div>
        </div>
    );
};

export default Shop;
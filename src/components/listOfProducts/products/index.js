import React from 'react';
import "./products.css";
import formatCurrency from '../../../utilities'

const Products = ({products, handleAddToCart}) => {


    return (
        <div className = "prdouctsContainer">
                {
                    products.map((product) => (
                        <div key = {product._id}  className = "singleProduct">
                                <a href ={"#" + product._id}>
                                    <img className = "singleProduct__image" src = {product.image} alt = {product.title}/>
                                    <p>{product.title}</p>
                                </a>
                                <div className = "productPrice__section">
                                    <div className = "priceNumber__box">{formatCurrency(product.price)}</div>
                                    <button 
                                        className = "addToCart__button"
                                        onClick = {() => handleAddToCart(product)}
                                    >
                                        <i className ="fas fa-shopping-cart shoppingIcon"></i>
                                        Add To Cart
                                    </button>
                                </div>
                        </div>
                    ))
                }
        </div>
    )
}

export default Products

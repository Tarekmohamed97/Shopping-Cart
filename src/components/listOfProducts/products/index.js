import React from 'react';
import "./products.css"

const Products = ({products}) => {


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
                                    <div>product price : {product.price}</div>
                                    <button className = "addToCart__button">Add To Cart</button>
                                </div>
                        </div>
                    ))
                }
        </div>
    )
}

export default Products

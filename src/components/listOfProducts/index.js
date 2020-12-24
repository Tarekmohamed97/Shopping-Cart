import React, {useState} from 'react';
import data from "../../data.json";
import "./listOfProducts.css"
import Products from './products';

function ListOfProducts() {

    const [state, setState] = useState({
        products: data.products,
        size: "",
        sort: ""
    })

    return (
        <div className = "productsList__Container">
            <div className = "mainContent__container">
                <Products products = {state.products} />
            </div>
            <div className = "sideBarContent__container">
                carts
            </div>
        </div>
    )
}

export default ListOfProducts

import React, {useState} from 'react';
import data from "../../data.json";
import "./listOfProducts.css"
import Products from './products';
import ProductsFilter from '../filterBar/index'

function ListOfProducts() {

    const [state, setState] = useState({
        products: data.products,
        size: "",
        sort: ""
    })

    const filterByPrice = (event) => {
        const sortValue = event.target.value;
        setState({...state,
            sort: sortValue,
            products: data.products.slice()
                        .sort((a,b) => 
                            sortValue === "lowest"?
                                a.price > b.price? 1 : -1
                            : sortValue === "Highest"?
                                a.price < b.price? 1 : -1
                            : a._id < b._id? 1 : -1
                        )
        });
    }

    const filterBySize = (event) => {
        if(!event.target.value){
            setState({...state,
                size: "ALL",
                products: data.products
            });
        } else{
            setState({...state,
                size: event.target.value,
                products: data.products.filter(product => product.availableSizes.indexOf(event.target.value) >= 0)
            });
        }
    }

    return (
        <div className = "productsList__Container">
            <div className = "mainContent__container">
                <ProductsFilter
                    productsCount = {state.products.length}
                    size = {state.size}
                    sort = {state.sort}
                    filterBySize = {filterBySize}
                    filterByPrice = {filterByPrice} 
                />
                <Products products = {state.products} />
            </div>
            <div className = "sideBarContent__container">
                carts
            </div>
        </div>
    )
}

export default ListOfProducts

import React, {useState} from 'react';
import data from "../../data.json";
import "./listOfProducts.css"
import Products from './products';
import ProductsFilter from '../filterBar/index'
import ReservedProducts from '../reservedProducts';
import UserForm from '../reservedProducts/userForm';


function ListOfProducts() {

    const [showUserFormPopup, setShowUserFormPopup] = useState(false)
    const [state, setState] = useState({
        products: data.products,
        size: "",
        sort: "",
        reservedItems: JSON.parse(localStorage.getItem("cartItems"))? JSON.parse(localStorage.getItem("cartItems")) : [],
        totalCost: JSON.parse(localStorage.getItem("totalCost")),
        name: "",
        email: "",
        phone: ""
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

    const handleAddToCart = (product) => {
        let alreadyInCart = false;
        const reservedItemsCopy = state.reservedItems.slice();
        let newTotalCost = state.totalCost;
        reservedItemsCopy.forEach((item) => {
            if(item._id === product._id){
                item.count++;
                alreadyInCart = true
                newTotalCost = newTotalCost + product.price
            }
        });
        if(!alreadyInCart){
            reservedItemsCopy.push({...product, count : 1});
            newTotalCost = newTotalCost + product.price
        }
        setState({...state,
            reservedItems: reservedItemsCopy,
            totalCost: newTotalCost
        })
        localStorage.setItem("cartItems", JSON.stringify(reservedItemsCopy));
        localStorage.setItem("totalCost", JSON.stringify(newTotalCost));
    }

    const handleRemoveFromCart = (product) => {
        const cartItems = state.reservedItems.slice();
        let newTotalCost = state.totalCost;
        newTotalCost = newTotalCost - product.price;
        if(product.count === 1){
            setState({...state,
            reservedItems: cartItems.filter(item => item._id !== product._id),
            totalCost: newTotalCost
            })
            localStorage.setItem("cartItems", JSON.stringify(cartItems.filter(item => item._id !== product._id)))
            localStorage.setItem("totalCost", JSON.stringify(newTotalCost));
        } else {
            cartItems.forEach((item) => {
                if(item._id === product._id){
                    item.count--;
                }
            });
            setState({...state,
                reservedItems: cartItems,
                totalCost: newTotalCost
            })
            localStorage.setItem("cartItems", JSON.stringify(cartItems));
            localStorage.setItem("totalCost", JSON.stringify(newTotalCost));
        }
    }

    const handleChange = (event) => {
        const {name, value} = event.target
        setState({...state,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(state)
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
                <Products handleAddToCart = {handleAddToCart}  products = {state.products} />
            </div>
            <div className = "sideBarContent__container">
                <ReservedProducts setShowUserFormPopup = {setShowUserFormPopup} totalCost = {state.totalCost} handleRemoveFromCart = {handleRemoveFromCart} cartItems = {state.reservedItems} />
            </div>
            {
                showUserFormPopup ? 
                <UserForm
                    setShowUserFormPopup = {setShowUserFormPopup}
                    handleChange = {handleChange}
                    handleSubmit = {handleSubmit}
                />  : null
            }
        </div>
    )
}

export default ListOfProducts

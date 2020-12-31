import React from 'react';
import formatCurrency from '../../utilities';
import './reservedProducts.css'

const ReservedProducts = ({cartItems, handleRemoveFromCart, totalCost}) => {
    return (
        <div>
            <div className = "cartHeader__section">
            {
                cartItems.length === 0?   
                <div className = "cartHeader__text">Your cart is empty</div>
                :
                <div className = "cartHeader__text">you have {cartItems.length} in the Cart {" "}</div>
            }
            </div>
            <div>
                {
                    cartItems.map(item => (
                        <div className = "reservedProduct__container" key = {item._id}>
                            <div>
                                <img className = "reservedProducts__image" src = {item.image} alt = {item.title} />
                            </div>
                            <div className = "reservedProducts__dataSection">
                                <div>{item.title}</div>
                                <div> Price:  {item.count} x {formatCurrency(item.price)} </div>
                                <button className = "removeFromCart__button" onClick = {() => handleRemoveFromCart(item)}>Remove Item</button>
                            </div>
                        </div>
                    ))
                }
                {
                    cartItems.length !== 0 && (
                        <div>
                            <div>Total Cost: {formatCurrency(totalCost)}</div>
                            <div>
                                <button>Proceed</button>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default ReservedProducts

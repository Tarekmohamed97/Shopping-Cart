import React, {useState} from 'react';
import formatCurrency from '../../utilities';
import './reservedProducts.css'

const ReservedProducts = ({cartItems, handleRemoveFromCart, totalCost, setShowUserFormPopup}) => {

    return (
        <div>
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
                            <div className = "costProceed__Section">
                                <div>Total Cost: {formatCurrency(totalCost)}</div>
                                <div>
                                    <button
                                        className = "ProceedButton__Section"
                                        onClick =  {() => setShowUserFormPopup(true)}>
                                            Proceed
                                    </button>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default ReservedProducts

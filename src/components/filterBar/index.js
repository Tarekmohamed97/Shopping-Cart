import React from 'react';
import "./filterBar.css"

function ProductsFilter({productsCount, size, sort, filterBySize, filterByPrice}) {
    return (
        <div className= "filterBar__container">
            <div className = "filterResult__section">{productsCount} Products</div>
            <div className = "filterSort__section">
                Order{" "}
                <select value = {sort} onChange = {filterByPrice}>
                    <option>Latest</option>
                    <option value = "lowest">Lowest Price</option>
                    <option value = "Highest">Highest Price</option>
                </select>
              </div>
            <div className = "filterSizes__Section">
                Filter{" "}
                 <select value = {size} onChange = {filterBySize}>
                     <option value = "">ALL</option>
                     <option value = "XS">XS</option>
                     <option value = "S">S</option>
                     <option value = "M">M</option>
                     <option value = "L">L</option>
                     <option value = "XL">XL</option>
                     <option value = "XLL">XLL</option>
                </select>
            </div>
        </div>
    )
}

export default ProductsFilter

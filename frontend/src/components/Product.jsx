import React, { useEffect, useState } from 'react';
import './Product.css'

import { Link } from 'react-router-dom'


const Product = (props) => {
    const { product } = props

    return (
        <div>
            <div className="productContainer">
                <Link to={`product/${product.id}`}>
                    <img src={product.image} alt="image" />
                    <div className="productNameInfo"> {product.name} </div>
                    <div className="productPriceInfo"> R${product.price} </div>
                </Link>
                {/* {<button className='btn' onClick={addToCart}>
                    ADICIONAR
                        <i class="fas fa-shopping-cart"></i>
                </button>} */}
            </div>
        </div>
    );
};

export default Product;
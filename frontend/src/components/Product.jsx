import React from 'react';
import './Product.css'

import { Link } from 'react-router-dom'


const Product = (props) => {
    const { product } = props

    return (
        <div>
            <div className="productContainer">
                <Link to={`product/${product.id}`}>
                    <img src={product.image} />
                    <div className="productNameInfo"> {product.name} </div>
                    <div className="productPriceInfo"> R${product.price} </div>
                </Link>
            </div>
        </div>
    );
};

export default Product;
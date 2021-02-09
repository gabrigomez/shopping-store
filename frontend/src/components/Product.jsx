import React from 'react';
import './Product.css'


const Product = (props) => {
    const { product } = props
    return (
        <div>
            <div>
                <a href={`product/${product.id}`}>
                    <img src={product.image} alt="image" />
                    <div className="productNameInfo"> {product.name} </div>
                    <div className="productPriceInfo"> R${product.price} </div>
                </a>
            </div>
        </div>
    );
};

export default Product;
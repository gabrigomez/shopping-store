import React from 'react';
import './Product.css'


const Product = (props) => {
    const { product } = props
    return (
        <div>
            <div>
                <img src={product.image} alt="image" />
                <div className="productName"> {product.name} </div>
                <div className="productPrice"> R${product.price} </div>
                <div className="productDescription"> {product.description} </div>
            </div>
        </div>
    );
};

export default Product;
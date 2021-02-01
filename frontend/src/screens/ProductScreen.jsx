import React from 'react';
import data from '../data';
import './ProductScreen.css'

const ProductScreen = () => {
    return (
        <div className="products">            
                {data.products.map((product) => (
                    <div> 
                        <img src={product.image} alt="image"/>
                        <div className="productName"> {product.name} </div>
                        <div className="productPrice"> R${product.price} </div>
                        <div className="productDescription"> {product.description} </div>
                    </div>
                ))}            
        </div>

    );
};

export default ProductScreen;
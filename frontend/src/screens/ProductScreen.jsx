import React from 'react';

import data from '../data';
import Product from '../components/Product'

const ProductScreen = () => {
    return (
        <div className="products">            
                {data.products.map((product) => (
                    <Product product={product}></Product>
                ))}            
        </div>

    );
};

export default ProductScreen;
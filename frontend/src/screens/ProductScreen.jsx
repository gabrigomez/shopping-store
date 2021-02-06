import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux'

import Product from '../components/Product'
import { listProducts } from '../actions/productActions';

const ProductScreen = () => {
    const dispatch = useDispatch()
    const productList = useSelector((state) => state.productList)
    const { error, products } = productList

    useEffect(() => {
        dispatch(listProducts())
    }, [dispatch])
    return (
        <div className="products">
            {products.map((product) => (
                <Product product={product}></Product>
            ))}
        </div>

    );
};

export default ProductScreen;
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'

import Product from '../components/Product'
import Message from '../components/Message'
import Loading from '../components/Loading'
import { listProducts } from '../actions/productActions';

const ProductScreen = () => {
    const dispatch = useDispatch()
    const productList = useSelector((state) => state.productList)
    const { loading, error, products } = productList

    useEffect(() => {
        dispatch(listProducts())
    }, [dispatch])
    return (
        <div>
            {loading ? (
                <Loading></Loading>
            ) : error ? (
                <Message>{error}</Message>
            ) : (
                        <div className="products">
                            {products.map((product) => (
                                <Product key={product._id} product={product}></Product>
                            ))}
                        </div>
                    )}
        </div>
    );
};

export default ProductScreen;
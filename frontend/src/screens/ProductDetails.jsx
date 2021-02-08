import React, { useEffect, useState } from 'react';

import './ProductDetails.css'
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../components/Loading';
import Message from '../components/Message';
import { detailsProduct } from '../actions/productActions';


const ProductDetails = (props) => {
    const dispatch = useDispatch()
    const productId = props.match.params.id
    const productDetails = useSelector((state) => state.productDetails)
    const { loading, error, product } = productDetails

    useEffect(() => {
        dispatch(detailsProduct(productId))
    }, [dispatch, productId])


    if (!product) {
        return (
            <div>
                Product not found!
            </div>
        )
    }
    return (
        <div>
            {loading ? (
                <Loading></Loading>
            ) : error ? (
                <Message>{error}</Message>
            ) : (
                        <div className="container">
                            <img className="productsImg" src={product.image} alt="image" />
                            <div>
                                <div className="productName"> {product.name} </div>
                                <div className="productPrice"> R${product.price} </div>
                                <div className="productDescription"> {product.description} </div>
                                <div className="productPrice"> Em estoque: {product.qtd} </div>
                                <button> Adicionar ao carrinho! </button>
                            </div>
                        </div>
                    )}
        </div>
    );
};

export default ProductDetails;
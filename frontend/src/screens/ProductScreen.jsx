import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'

import Product from '../components/Product'
import Message from '../components/Message'
import Loading from '../components/Loading'
import { listProducts } from '../actions/productActions';

import '../tailwind.css'

const ProductScreen = (props) => {
    const dispatch = useDispatch()
    const productList = useSelector((state) => state.productList)
    const { loading, error, products } = productList

    const qtd = 1

    const addToCart = (event) => {
        const id = event.target.id
        props.history.push(`/cart/${id}?qtd=${qtd}`)
    }

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
                                <div>
                                    <Product key={product.id} product={product}></Product>
                                    <button id={product.id} className='btn' onClick={addToCart}>
                                        ADICIONAR
                                    <i class="fas fa-shopping-cart"></i>
                                    </button>
                                </div>
                            ))}

                        </div>

                    )}
        </div>
    );
};

export default ProductScreen;
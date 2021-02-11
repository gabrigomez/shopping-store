import React, { useEffect, useState } from 'react';

import './ProductDetails.css'
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../components/Loading';
import Message from '../components/Message';
import { detailsProduct } from '../actions/productActions';


const ProductDetails = (props) => {
    const [qtd, setQtd] = useState(1)
    const dispatch = useDispatch()
    const productId = props.match.params.id
    const productDetails = useSelector((state) => state.productDetails)
    const { loading, error, product } = productDetails

    useEffect(() => {
        dispatch(detailsProduct(productId))
    }, [dispatch, productId])

    const addToCart = () => {
        props.history.push(`/cart/${productId}?qtd=${qtd}`)
    }

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
                            <div className="container2">
                                <div className="info1">
                                    <div className="productName"> {product.name} </div>
                                    <div className="productPrice"> R${product.price} </div>
                                    <div className="productDescription"> {product.description} </div>
                                </div>
                                <div className="info2">
                                    <div className="productStock"> Estoque: {product.qtd} </div>
                                    {product.qtd > 0 ? (
                                        <div>
                                            <div className="selector">Selecione a quantidade
                                            <select value={qtd} onChange={(e) => setQtd(e.target.value)}>
                                                    {[...Array(product.qtd).keys()].map(
                                                        (x) => (
                                                            <option key={x + 1} value={x + 1}>
                                                                {x + 1}
                                                            </option>
                                                        )
                                                    )}
                                                </select>
                                            </div>
                                            <button className='btn' onClick={addToCart}> Adicionar ao carrinho! </button>
                                        </div>
                                    ) : (
                                            <div className="productStock"> Sem estoque!</div>
                                        )}
                                </div>
                            </div>
                        </div>

                    )
            }
        </div >
    );
};

export default ProductDetails;
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../actions/cartActions';
import Message from '../components/Message';
import { Link } from 'react-router-dom'
import './CartScreen.css'

const CartScreen = (props) => {
    const productId = props.match.params.id
    const qtd = props.location.search ? Number(props.location.search.split('=')[1]) : 1

    const dispatch = useDispatch()
    const cart = useSelector((state) => state.cart)
    const { cartItems } = cart
    useEffect(() => {
        if (productId) {
            dispatch(addToCart(productId, qtd))
        }
    }, [dispatch, qtd, productId])

    const removeFromCart = (productId) => {
        //delete item
    }

    const checkoutHandler = () => {
        props.history.push('/signin?redirect=shipping')
    }

    return (
        <div className="cartContainer">
            <div className="productCart">
                <h1> Carrinho de compras </h1>
                {cartItems.length === 0 ? (
                    <Message>
                        O carrinho está vazio. <Link to="/"> Voltar pra o Início</Link>
                    </Message>

                ) : (
                        <ul>
                            {cartItems.map((item) => (
                                <li key={item.product}>
                                    <div className="row">
                                        <img src={item.image} alt={item.name}></img>
                                    </div>
                                    <div>
                                        <Link to={`product/${item.product}`}>{item.name}</Link>
                                    </div>
                                    <div>
                                        <select
                                            value={item.qtd}
                                            onChange={(e) =>
                                                dispatch(addToCart(item.product, Number(e.target.value))
                                                )
                                            }
                                        >
                                            {[...Array(item.qtd).keys()].map((x) => (
                                                <option key={x + 1} value={x + 1}>
                                                    {x + 1}
                                                </option>
                                            ))}
                                        </select>
                                    </div>

                                    <div>R${item.price}</div>
                                    <div>
                                        <button
                                            type="button"
                                            onClick={() => removeFromCart(item.product)}>
                                            Deletar item
                                        </button>
                                    </div>

                                </li>
                            ))}
                        </ul>
                    )}
            </div>

            <div>
                <div>
                    <ul>
                        <li>
                            <h2>
                                Subtotal ({cartItems.reduce((a, c) => a + c.qtd, 0)} items) : R$
                                {cartItems.reduce((a, c) => a + c.price * c.qtd, 0).toFixed(2)}
                            </h2>
                        </li>
                        <li>
                            <button
                                type="button"
                                onClick={checkoutHandler}
                                disabled={cartItems.length === 0}>
                                Ir para o pagamento
                            </button>
                        </li>
                    </ul>
                </div>
            </div>

            <button className="btn"> Ir para o pagamento</button>
        </div>
    );
};

export default CartScreen;
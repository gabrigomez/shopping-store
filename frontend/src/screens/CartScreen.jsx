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
    return (
        <div className="cartContainer">
            {cartItems.length === 0 ? <Message>
                Carrinho Vazio <Link to="/"> Voltar </Link>
            </Message>
                :
                <ul>
                    {
                        cartItems.map((item) => (
                            <li key={item.product}>

                            </li>
                        ))
                    }
                </ul>
            }
            <button className="btn"> Ir para o pagamento</button>
        </div>
    );
};

export default CartScreen;
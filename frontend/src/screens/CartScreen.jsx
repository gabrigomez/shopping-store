import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../actions/cartActions';
import './CartScreen.css'

const CartScreen = (props) => {
    const productId = props.match.params.id
    const qtd = props.location.search ? Number(props.location.search.split('=')[1]) : 1

    const dispatch = useDispatch()
    useEffect(() => {
        if (productId) {
            dispatch(addToCart(productId, qtd))
        }
    }, [dispatch, qtd, productId])
    return (
        <div className="cartContainer">
            <h1>Cart Screen</h1>
            <div className="cartDetails">
                <div> Product Id {productId}</div>
                <div> Quantidade: {qtd}</div>
                <button> Ir para o pagamento</button>
            </div>
        </div>
    );
};

export default CartScreen;
import React from 'react';
import './CartScreen.css'

const CartScreen = (props) => {
    const productId = props.match.params.id
    const qtd = props.location.search ? Number(props.location.search.split('=')[1]) : 1
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
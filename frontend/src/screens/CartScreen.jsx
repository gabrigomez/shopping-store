import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../actions/cartActions';
import Message from '../components/Message';
import { Link } from 'react-router-dom'
import './CartScreen.css'

import { Box, Button, ThemeProvider } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import Select from '@material-ui/core/Select';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { theme } from '../utils/materialUI';


const CartScreen = (props) => {
    const productId = props.match.params.id
    const qtd = props.location.search ? Number(props.location.search.split('=')[1]) : 1

    const dispatch = useDispatch()
    const cart = useSelector((state) => state.cart)
    const user = useSelector((state) => state.userSignin.userInfo)
    const { cartItems } = cart


    useEffect(() => {
        if (productId) {
            dispatch(addToCart(productId, qtd))
        }
    }, [dispatch, qtd, productId])

    const removeFromCartHandler = (id) => {
        dispatch(removeFromCart(id))
    }

    const checkoutHandler = () => {
        if (user) {
            props.history.push('/shipping')
        } else {
            props.history.push('/login')
        }
    }

    return (
        <div className="cartContent">
            <ThemeProvider theme={theme}>
                <div className="productCart">
                    <h1> Carrinho de compras </h1>
                    {cartItems.length === 0 ? (
                        <Message>
                            O carrinho está vazio. <br />
                            <i class="fas fa-backward"></i>
                            <Link to="/"> Voltar pra o Início</Link>
                        </Message>

                    ) : (
                        <Box width="100%">
                            {cartItems.map((item) => (
                                <ListItem key={item.product} >
                                    <Avatar src={item.image} alt={item.name} />
                                    <ListItemText primary={item.name} secondary={`R$ ${item.price}`} />
                                    <Select
                                        value={item.qtd}
                                        onChange={(e) =>
                                            dispatch(addToCart(item.product, Number(e.target.value))
                                            )
                                        }
                                    >
                                        {[...Array(item.inStock).keys()].map((x) => (
                                            <option key={x + 1} value={x + 1}>
                                                {x + 1}
                                            </option>
                                        ))}
                                    </Select>

                                    <Box className="rowPrice">R${item.price * item.qtd}</Box>
                                    <div className="rowRemove">
                                        <button
                                            type="button"
                                            onClick={() => removeFromCartHandler(item.product)}>
                                            <i class="fas fa-trash"></i>
                                        </button>
                                    </div>
                                </ListItem>
                            ))}
                        </Box>

                    )}
                </div>
                <div className="subtotal">
                    <ul>
                        <li>
                            <h2>
                                Subtotal ({cartItems.reduce((a, c) => a + c.qtd, 0)} items) : R$
                                {cartItems.reduce((a, c) => a + c.price * c.qtd, 0).toFixed(2)}
                            </h2>
                        </li>
                        <li>
                            <Button
                                type="button"
                                className="btn"
                                variant="contained"
                                color="primary"
                                onClick={checkoutHandler}
                                disabled={cartItems.length === 0}>
                                Ir para o pagamento
                        </Button>
                        </li>
                    </ul>
                </div>
            </ThemeProvider>
        </div>
    );
};

export default CartScreen;
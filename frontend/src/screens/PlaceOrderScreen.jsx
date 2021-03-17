import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import LinearProgress from '@material-ui/core/LinearProgress';
import { Box, ThemeProvider } from '@material-ui/core';
import ListItemText from '@material-ui/core/ListItemText';
import { theme, placeOrderStyles } from '../utils/materialUI.jsx'
import { createOrder } from '../actions/orderActions.js';
import { ORDER_CREATE_RESET, ORDER_CREATE_SUCCESS } from '../constants/orderConstants.js';


const PlaceOrderScreen = (props) => {
    const classes = placeOrderStyles()
    const cart = useSelector((state) => state.cart)
    const user = useSelector((state) => state.userSignin.userInfo)
    const { shippingAddress } = cart
    const { cartItems } = cart
    const dispatch = useDispatch()

    const orderCreate = useSelector((state) => state.orderCreate)
    const { loading, success, error, order } = orderCreate


    if (!user) {
        props.history.push('/login')
    } if (Object.keys(shippingAddress).length === 0) {
        props.history.push('/shipping')
    }

    useEffect(() => {
        if (success) {
            props.history.push(`/order/${order.id}`)
            dispatch({ type: ORDER_CREATE_RESET })
        }
    })

    const submitHandler = () => {
        dispatch(createOrder({ ...cart, orderItems: cart.cartItems }))
    }

    return (
        <Box>
            <ThemeProvider theme={theme}>
                <div className="orderBar">
                    <LinearProgress color="primary" variant="determinate" value={100} />
                </div>
                <Typography align="center" component="h1" variant="h5">
                    <Box>
                        Informações do seu pedido
                </Box>
                </Typography>
                <div className="orderBar">
                    <LinearProgress variant="determinate" value={100} />
                </div>
                <Box width="800px" display="flex" justifyContent="space-between">
                    <Box>
                        <Typography align="center" component="h1" variant="h6"> Itens</Typography>
                        <Box display="flex" flexDirection="column" margin="10px">
                            {cartItems.map((item) => (
                                <Box display="flex" justifyContent="space-around" alignItems="center">
                                    <Avatar src={item.image} alt={item.name} />
                                    <ListItemText primary={item.name} secondary={`R$ ${item.price}`} />
                                    <ListItemText primary={`x${item.qtd}`} />
                                    <Typography variant="h6"> R${item.price * item.qtd}</Typography>
                                </Box>
                            ))}
                        </Box>
                    </Box>
                    <Box>
                        <Typography align="center" component="h1" variant="h6"> Comprador</Typography>
                        <Box display="flex" flexDirection="column" justifyContent="space-around" alignItems="center" margin="10px">
                            <Typography variant="h6"> {shippingAddress.fullName}</Typography>
                            <Typography variant="subtitle1"> {shippingAddress.address}</Typography>
                            <Typography variant="subtitle1"> {shippingAddress.city}</Typography>
                            <Typography variant="subtitle1"> {shippingAddress.postalCode}</Typography>
                        </Box>
                    </Box>

                </Box>
                <Typography align="center" variant="h4" >
                    <Box>
                        Total: R$ {cartItems.reduce((a, c) => a + c.price * c.qtd, 0).toFixed(2)}
                    </Box>
                </Typography>

                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                    onClick={submitHandler}
                >
                    FINALIZAR PEDIDO com {cart.paymentMethods}
                </Button>
            </ThemeProvider>
        </Box>

    );
};

export default PlaceOrderScreen;
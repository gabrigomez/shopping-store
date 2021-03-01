import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { saveShippingAddress } from '../actions/cartActions';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import LinearProgress from '@material-ui/core/LinearProgress';
import { Box } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(5),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

const PlaceOrderScreen = (props) => {
    const classes = useStyles()
    const cart = useSelector((state) => state.cart)
    const user = useSelector((state) => state.userSignin.userInfo)
    const { shippingAddress } = cart
    const { cartItems } = cart

    if (!user) {
        props.history.push('/login')
    } if (Object.keys(shippingAddress).length === 0) {
        props.history.push('/shipping')
    }

    const submitHandler = () => {
        // TODO
    }

    return (
        <Container>
            <div className="orderBar">
                <LinearProgress variant="determinate" value={100} />
            </div>
            <Typography align="center" component="h1" variant="h6">
                Informações do seu pedido
                </Typography>
            <div className="orderBar">
                <LinearProgress variant="determinate" value={100} />
            </div>
            <Box display="flex" flexDirection="column" >
                {cartItems.map((item) => (
                    <Box display="flex" justifyContent="space-around" alignItems="center">
                        <Avatar src={item.image} alt={item.name} />
                        <Typography variant="button" display="block" gutterBottom>{item.name}</Typography>
                        <Typography>x{item.qtd} </Typography>
                        <Typography> R${item.price}</Typography>
                    </Box>
                ))}
            </Box>
            <br />
            <Typography align="center" component="h1" variant="h4" >
                Total: R$ {cartItems.reduce((a, c) => a + c.price * c.qtd, 0).toFixed(2)}
            </Typography>
            <br />
            <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick={submitHandler}
            >
                FINALIZAR PEDIDO!
            </Button>
        </Container>

    );
};

export default PlaceOrderScreen;
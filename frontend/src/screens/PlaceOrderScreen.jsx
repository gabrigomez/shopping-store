import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { saveShippingAddress } from '../actions/cartActions';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import { Box } from '@material-ui/core';
import ListItemText from '@material-ui/core/ListItemText';

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
        <Box width="500px">
            <div className="orderBar">
                <LinearProgress variant="determinate" value={100} />
            </div>
            <Typography align="center" component="h1" variant="h5">
                <Box>
                    Informações do seu pedido
                </Box>
            </Typography>
            <div className="orderBar">
                <LinearProgress variant="determinate" value={100} />
            </div>
            <Box display="flex" flexDirection="column" margin="20px">
                {cartItems.map((item) => (
                    <Box display="flex" justifyContent="space-around" alignItems="center">
                        <Avatar src={item.image} alt={item.name} />
                        <ListItemText primary={item.name} secondary={`R$ ${item.price}`} />
                        <ListItemText primary={`x${item.qtd}`} />
                        <Typography variant="h6"> R${item.price * item.qtd}</Typography>
                    </Box>
                ))}
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
                FINALIZAR PEDIDO!
            </Button>
        </Box>

    );
};

export default PlaceOrderScreen;
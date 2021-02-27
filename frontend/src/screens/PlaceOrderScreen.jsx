import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { saveShippingAddress } from '../actions/cartActions';

import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import LinearProgress from '@material-ui/core/LinearProgress';

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

    if (!user) {
        props.history.push('/login')
    } if (Object.keys(shippingAddress).length === 0) {
        props.history.push('/shipping')
    }

    const submitHandler = () => {
        // TODO
    }

    return (
        <Container component="main" maxWidth="xs">
            <div className="orderBar">
                <LinearProgress variant="determinate" value={100} />
            </div>
            <CssBaseline />
            <Typography align="center" component="h1" variant="h6">
                Informações do seu pedido
            </Typography>
            <TextField
                variant="outlined"
                margin="normal"
                disabled
                fullWidth
                autoFocus
                placeholder={shippingAddress.fullName}
            />
            <TextField
                variant="outlined"
                margin="normal"
                disabled
                fullWidth
                autoFocus
                placeholder={shippingAddress.address}
            />
            <TextField
                variant="outlined"
                margin="normal"
                disabled
                fullWidth
                autoFocus
                placeholder={shippingAddress.city}
            />
            <TextField
                variant="outlined"
                margin="normal"
                disabled
                fullWidth
                autoFocus
                placeholder={shippingAddress.postalCode}
            />
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
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

import '../tailwind.css'
import './ShippingScreen.css'

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

const ShippingScreen = (props) => {
    const classes = useStyles()
    const cart = useSelector((state) => state.cart)
    const user = useSelector((state) => state.userSignin.userInfo)
    const { shippingAddress } = cart

    const [fullName, setFullName] = useState(shippingAddress.fullName)
    const [address, setAddress] = useState(shippingAddress.address)
    const [city, setCity] = useState(shippingAddress.city)
    const [postalCode, setPostalCode] = useState(shippingAddress.postalCode)

    const dispatch = useDispatch()

    if (!user) {
        props.history.push('/login')
    } else if (Object.keys(shippingAddress).length > 0) {
        props.history.push('/payment')
    }

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(
            saveShippingAddress({ fullName, address, city, postalCode })
        )
        props.history.push('/payment')
    }

    return (
        <Container component="main" maxWidth="xs">
            <div className="orderBar">
                <LinearProgress variant="determinate" value={50} />
            </div>
            <CssBaseline />
            <Typography align="center" component="h1" variant="h6">
                Informações de entrega
            </Typography>
            <form className={classes.form} noValidate>
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="fullName"
                    label="Nome Completo"
                    name="fullName"
                    autoComplete="fullName"
                    autoFocus
                    onChange={(e) => setFullName(e.target.value)}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="city"
                    label="Cidade"
                    id="city"
                    autoComplete="city"
                    onChange={(e) => setCity(e.target.value)}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="postalCode"
                    label="CEP"
                    id="postalCode"
                    autoComplete="postalCode"
                    onChange={(e) => setPostalCode(e.target.value)}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="address"
                    label="Endereço"
                    id="address"
                    autoComplete="address"
                    onChange={(e) => setAddress(e.target.value)}
                />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                    onClick={submitHandler}
                >
                    IR PARA PAGAMENTO
                    </Button>
            </form>
        </Container>
    );
};

export default ShippingScreen;
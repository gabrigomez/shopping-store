import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { savePaymentMethods } from '../actions/cartActions';

import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';

import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import LinearProgress from '@material-ui/core/LinearProgress';
import { theme, paymentStyles } from '../utils/materialUI.jsx'


const PaymentScreen = (props) => {
    const classes = paymentStyles()

    const cart = useSelector((state) => state.cart)
    const user = useSelector((state) => state.userSignin.userInfo)
    const { paymentMethods } = cart
    const { shippingAddress } = cart

    const [payment, setPayment] = useState(paymentMethods.payment)
    const [open, setOpen] = useState(false)
    const dispacth = useDispatch()

    if (!user) {
        props.history.push('/login')
    }
    if (!shippingAddress) {
        props.history.push('/shipping')
    }

    const handleChange = (event) => {
        setPayment(event.target.value)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const handleOpen = () => {
        setOpen(true)
    }

    const submitHandler = (e) => {
        e.preventDefault()
        dispacth(
            savePaymentMethods(payment)
        )
        props.history.push('/placeOrder')
    }

    return (
        <Container component="main" maxWidth="xs">
            <ThemeProvider theme={theme}>
                <div className="orderBar">
                    <LinearProgress variant="determinate" value={75} />
                </div>
                <CssBaseline />
                <Typography align="center" component="h1" variant="h6">
                    Selecione a forma de pagamento
            </Typography>
                <FormControl className={classes.formControl}>
                    <InputLabel id="demo-controlled-open-select-label">Pagamento</InputLabel>
                    <Select
                        className="selectPayment"
                        labelId="payment"
                        id="payment"
                        open={open}
                        onClose={handleClose}
                        onOpen={handleOpen}
                        value={payment}
                        onChange={handleChange}
                    >
                        <MenuItem value="">
                            <em>Selecione</em>
                        </MenuItem>
                        <MenuItem value={'PayPal'}>PayPal</MenuItem>
                        <MenuItem value={'Mercado Pago'}>Mercado Pago</MenuItem>
                        <MenuItem value={'PagSeguro'}>PagSeguro</MenuItem>
                    </Select>
                </FormControl>
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
            </ThemeProvider>
        </Container>
    );
};

export default PaymentScreen;
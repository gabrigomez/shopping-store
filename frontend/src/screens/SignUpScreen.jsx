import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import Loading from '../components/Loading';
import Message from '../components/Message';
import { signup } from '../actions/userActions';
// import './LoginScreen.css'


import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import Typography from '@material-ui/core/Typography';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { theme } from '../utils/materialUI.jsx'

import '../tailwind.css'

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


const SignUpScreen = (props) => {
    const classes = useStyles()
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [confirmEmail, setConfirmEmail] = useState('')

    const dispatch = useDispatch()
    const userSignUp = useSelector((state) => state.userSignUp)
    const { loading, userInfo, error } = userSignUp

    const redirect = props.location.search
        ? props.location.search.split('=')[1]
        : '/'


    const submitHandler = (e) => {
        e.preventDefault()
        if (email !== confirmEmail) {
            alert('E-mails não conferem!')
        } else {
            dispatch(signup(email, password, name))
        }
    }

    useEffect(() => {
        if (userInfo) {
            props.history.push(redirect)
        }
    }, [props.history, redirect, userInfo])

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                {loading && <Loading></Loading>}
                {error && <Message>{error}</Message>}
                <CssBaseline />
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <ArrowForwardIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign Up
                </Typography>
                    <form className={classes.form} noValidate>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="name"
                            label="Digite seu nome"
                            name="name"
                            autoComplete="name"
                            autoFocus
                            onChange={(e) => setName(e.target.value)}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Endereço de e-mail"
                            name="email"
                            autoComplete="email"
                            autoFocus
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="confirmEmail"
                            label="Confirme seu e-mail"
                            name="confirmEmail"
                            autoComplete="confirmEmail"
                            autoFocus
                            onChange={(e) => setConfirmEmail(e.target.value)}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Senha"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                            onClick={submitHandler}
                        >
                            Entrar
                    </Button>
                        <Grid justify="center" container>
                            <Grid item>
                                <Link href="/login" variant="body2" color="primary">
                                    {"Já possui conta? Entre aqui!"}
                                </Link>
                            </Grid>
                        </Grid>
                    </form>
                </div>
            </Container>
        </ThemeProvider>
    );
};

export default SignUpScreen;
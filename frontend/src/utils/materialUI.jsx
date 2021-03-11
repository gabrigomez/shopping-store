import { createMuiTheme } from '@material-ui/core/styles';
import { yellow } from '@material-ui/core/colors'
import { makeStyles } from '@material-ui/core/styles';


export const theme = createMuiTheme({
    palette: {
        primary: yellow
    }
});

export const paymentStyles = makeStyles((theme) => ({
    button: {
        display: 'block',
        marginTop: theme.spacing(2),
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
        display: 'flex',
        marginBottom: '25px'

    },
}));

export const placeOrderStyles = makeStyles((theme) => ({
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
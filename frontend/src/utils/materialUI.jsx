import { createMuiTheme, withStyles } from '@material-ui/core/styles';
import { grey, yellow } from '@material-ui/core/colors'
import { makeStyles } from '@material-ui/core/styles';
import Badge from '@material-ui/core/Badge';


export const theme = createMuiTheme({
    palette: {
        primary: yellow,
        secondary: grey['#212121']
    }
});

export const StyledBadge = withStyles((theme) => ({
    badge: {
        right: 40,
        top: 7,
    },
}))(Badge);

export const paymentStyles = makeStyles((theme) => ({
    button: {
        display: 'block',
        marginTop: theme.spacing(2),
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: '130px',
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
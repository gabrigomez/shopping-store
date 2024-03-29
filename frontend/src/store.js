import { applyMiddleware, createStore, compose, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { paymentMethods } from './actions/cartActions.js';
import { cartAddReducer } from './reducers/cartReducers.js'
import { orderCreateReducer } from './reducers/orderReducers.js';
import { productDetailsReducer, productListReducer } from './reducers/productReducers.js'
import { userSigninReducer, userSignupReducer } from './reducers/userReducers.js';

const initialState = {
    userSignin: {
        userInfo: localStorage.getItem('userInfo')
            ? JSON.parse(localStorage.getItem('userInfo'))
            : null
    },
    cart: {
        cartItems: localStorage.getItem('cartItems')
            ? JSON.parse(localStorage.getItem('cartItems'))
            : [],
        shippingAddress: localStorage.getItem('shippingAddress')
            ? JSON.parse(localStorage.getItem('shippingAddress'))
            : {},
        paymentMethods: 'Paypal'
    },
};

const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart: cartAddReducer,
    userSignin: userSigninReducer,
    userSignUp: userSignupReducer,
    orderCreate: orderCreateReducer
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
    reducer,
    initialState,
    composeEnhancer(applyMiddleware(thunk))
)

export default store;
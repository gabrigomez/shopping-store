import Axios from 'axios'
import { ADD_TO_CART, REMOVE_FROM_CART } from '../constants/cartConstants'


export const addToCart = (productId, qtd) => async (dispatch, getState) => {
    const { data } = await Axios.get(`/api/products/${productId}`)
    dispatch({
        type: ADD_TO_CART,
        payload: {
            name: data.name,
            image: data.image,
            price: data.price,
            inStock: data.qtd,
            product: data.id,
            qtd,
        }
    })
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
}

export const removeFromCart = (productId) => async (dispatch, getState) => {
    dispatch({
        type: REMOVE_FROM_CART,
        payload: productId
    })
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}
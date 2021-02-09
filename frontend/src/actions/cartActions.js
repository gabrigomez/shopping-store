import Axios from 'axios'
import { ADD_TO_CART } from '../constants/cartConstants'


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
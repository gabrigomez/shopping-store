import { ADD_TO_CART, CART_EMPTY, CART_SAVE_SHIPPING_ADDRESS, PAYMENT_METHODS, REMOVE_FROM_CART } from "../constants/cartConstants"

export const cartAddReducer = (state = { cartItems: [] }, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            const item = action.payload
            const existItem = state.cartItems.find((x) => x.product === item.product)

            if (existItem) {
                return {
                    ...state,
                    cartItems: state.cartItems.map((x) =>
                        x.product === existItem.product ? item : x
                    )
                }
            } else {
                return {
                    ...state,
                    cartItems: [...state.cartItems, item]
                }
            }
        case REMOVE_FROM_CART:
            return {
                ...state,
                cartItems: state.cartItems.filter((x) => x.product !== action.payload)
            }
        case CART_SAVE_SHIPPING_ADDRESS:
            return {
                ...state,
                shippingAddress: action.payload
            }
        case PAYMENT_METHODS:
            return {
                ...state,
                paymentMethods: action.payload
            }
        case CART_EMPTY:
            return {
                ...state,
                cartItems: []
            }
        default:
            return state
    }
}

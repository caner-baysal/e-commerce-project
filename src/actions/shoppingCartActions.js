import { SET_ADDRESS, SET_CART, SET_PAYMENT } from "../reducers/shoppingCartReducer"

export const setCart = (cart) => ({type: SET_CART, payload: cart});
export const setPayment = (payment) => ({type: SET_PAYMENT, payload: payment});
export const setAddress = (address) => ({type: SET_ADDRESS, payload: address});

export const addToCart = (product) => (dispatch, getState) => {
    const {cart} = getState().shoppingCart;
    const existing = cart.find((item) => item.product.id === product.id);

    let updatedCart;
    if(existing) {
        updatedCart = cart.map((item) => item.product.id === product.id ? {...item, count: item.count + 1} : item);
    } else {
        updatedCart = [...cart, {count: 1, checked: true, product}];
    }
    dispatch(setCart(updatedCart));
}
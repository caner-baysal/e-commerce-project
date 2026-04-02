export const SET_CARD = "SET_CARD";
export const SET_PAYMENT = "SET_PAYMENT";
export const SET_ADDRESS = "SET_ADDRESS";

const initialState = {
    card: [],
    payment: {},
    address: {}
}

function shoppingCardReducer(state = initialState, action) {
    switch (action.type) {
        case SET_CARD:
            return {...state, card: action.payload};
        case SET_PAYMENT:
            return {...state, payment: action.payload};
        case SET_ADDRESS:
            return {...state, address: action.payload};
        default:
            return state;
    }
}

export default shoppingCardReducer;
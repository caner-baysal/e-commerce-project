import axios from "axios";
import { SET_LANGUAGE, SET_ROLES, SET_THEME, SET_USER } from "../reducers/clientReducer"

export const setUser = (user) => ({type: SET_USER, payload: user});
export const SetRoles = (roles) => ({type: SET_ROLES, payload: roles});
export const setTheme = (theme) => ({type: SET_THEME, payload: theme});
export const setLanguage = (language) => ({type: SET_LANGUAGE, payload: language});

export const fetchRoles = () => async(dispatch, getState) => {
    const {cilent} = getState();
    if(client.roles.length > 0) return;
    try {
        const response = await axios.get(
            "https://workintech-fe-ecommerce.onrender.com/roles"
        );
        dispatch(setRoles(response.data));
    } catch(error) {
        console.warn("Failed to fetch roles", error);
    }
};
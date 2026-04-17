import axios from "axios";
import { SET_LANGUAGE, SET_ROLES, SET_THEME, SET_USER } from "../reducers/clientReducer"

export const setUser = (user) => ({ type: SET_USER, payload: user });
export const setRoles = (roles) => ({ type: SET_ROLES, payload: roles });
export const setTheme = (theme) => ({ type: SET_THEME, payload: theme });
export const setLanguage = (language) => ({ type: SET_LANGUAGE, payload: language });

export const axiosInstance = axios.create({
    baseURL: "https://workintech-fe-ecommerce.onrender.com"
});

export const fetchRoles = () => async (dispatch, getState) => {
    const { client } = getState();
    if (client.roles.length > 0) return;
    try {
        const response = await axios.get(
            "https://workintech-fe-ecommerce.onrender.com/roles"
        );
        dispatch(setRoles(response.data));
    } catch (error) {
        console.warn("Failed to fetch roles", error);
    }
};

export const loginUser = (credentials, rememberMe, onSuccess) => async (dispatch) => {
    const response = await axiosInstance.post("/login", credentials);
    const user = response.data;
    axiosInstance.defaults.headers.common["Authorization"] = user.token;
    dispatch(setUser(user));
    if (rememberMe && user.token) {
        localStorage.setItem("token", user.token);
    }
    if (onSuccess) onSuccess();
};

export const autoLogin = () => async (dispatch) => {
    const token = localStorage.getItem("token");
    if (!token) return;
    axiosInstance.defaults.headers.common["Authorization"] = token;
    try {
        const response = await axiosInstance.get("/verify");
        const user = response.data;
        dispatch(setUser(user));

        if (user.token) {
            localStorage.setItem("token", user.token);
            axiosInstance.defaults.headers.common["Autorization"] = user.token;
        }
    }
    catch (error) {
        localStorage.removeItem("token");
        delete axiosInstance.defaults.headers.common["Authorization"];
    }
};
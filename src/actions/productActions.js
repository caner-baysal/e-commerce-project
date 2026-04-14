import { UndoIcon } from "lucide-react";
import {
    SET_CATEGORIES, SET_FETCH_STATE, SET_FILTER, SET_LIMIT, SET_OFFSET, SET_PRODUCT_LIST, SET_TOTAL, SET_SELECTED_PRODUCT,
    SET_PRODUCT_FETCH_STATE
} from "../reducers/productReducer";

import { axiosInstance } from "./clientActions";

export const setCategories = (categories) => ({ type: SET_CATEGORIES, payload: categories });
export const setProductList = (productList) => ({ type: SET_PRODUCT_LIST, payload: productList });
export const setTotal = (total) => ({ type: SET_TOTAL, payload: total });
export const setFetchState = (fetchState) => ({ type: SET_FETCH_STATE, payload: fetchState });
export const setLimit = (limit) => ({ type: SET_LIMIT, payload: limit });
export const setOffset = (offset) => ({ type: SET_OFFSET, payload: offset });
export const setFilter = (filter) => ({ type: SET_FILTER, payload: filter });
export const setSelectedProduct = (product) => ({type: SET_SELECTED_PRODUCT, payload: product});
export const setProductFetchState = (state) => ({ type: SET_PRODUCT_FETCH_STATE, payload: state }); 



export const fetchCategories = () => async (dispatch, getState) => {
    const { product } = getState();
    if (product.categories.length > 0) return;
    try {
        const response = await axiosInstance.get("/categories");
        dispatch(setCategories(response.data));
    }
    catch (error) {
        console.warn("Failed to get fetch categories", error);
    }
}

export const fetchProducts = (params = {}) => async (dispatch) => {
    dispatch(setFetchState("FETCHING"));
    try {
        const queryParts = [];
        if (params.category) queryParts.push(`category=${params.category}`);
        if (params.sort) queryParts.push(`sort=${params.sort}`);
        if (params.filter) queryParts.push(`filter=${encodeURIComponent(params.filter)}`);
        if (params.limit) queryParts.push(`limit=${params.limit}`);
        if (params.offset !== undefined && params.offset > 0) queryParts.push(`offset=${params.offset}`)

        const queryString = queryParts.length > 0 ? `?${queryParts.join("&")}` : "";
        //console.log("Fetching:", `/products${queryString}`);

        const response = await axiosInstance.get(`/products${queryString}`);
        dispatch(setProductList(response.data.products));
        dispatch(setTotal(response.data.total));
        dispatch(setFetchState("FETCHED"));
    }
    catch (error) {
        console.warn("Failed to fetch products", error);
        dispatch(setFetchState("FAILED"));
    }
};

export const fetchProductById = (productId) => async (dispatch) => {
    dispatch(setProductFetchState("FETCHING"));
    try {
        const response = await axiosInstance.get(`/products/${productId}`);
        dispatch(setSelectedProduct(response.data));
        dispatch(setProductFetchState("FETCHED"));
    }
    catch (error) {
        console.warn("Failed to get fetch product", error);
        dispatch(setProductFetchState("FAILED"));
    }
};
import {GetProductsReq, GetProductsSuccess , GetProductsFailure ,GetproductsData, SortProducts} from "./actionTypes"

// action for get products request
export const getProductsReq = (payload) => {
    return {
        type: GetProductsReq,
        payload
}
};
 
 // action for get products success
 
export const getProductsSuccess = (payload) => {
    return {
        type: GetProductsSuccess,
        payload
    }
};
 
 // action for get products failure
 
export const getProductsFailure = (payload) => {
    return {
        type:GetProductsFailure,
        payload
    }
};

// thunk call to fetch products  list
export const getproductsData = (payload) => {
    return {
        type: GetproductsData,
        payload
    }
};

// action object for sort  feature

export const sortProducts = (payload) => {
    return {
        type:SortProducts,
        payload
    }
};

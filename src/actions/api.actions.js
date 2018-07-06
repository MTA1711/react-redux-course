export const API_REQUEST = "API_REQUEST";
export const API_SUCCESS = "API_SUCCESS";
export const API_ERROR = "API_ERROR";

export const apiRequest = (body, method, url, entity, success) => ({
    type : API_REQUEST,
    payload : body,
    meta: {method, url, entity, success}
});

export const apiSuccess = (response, entity) => ({
    type : API_SUCCESS,
    payload : response,
    meta: {entity}
});

export const apiError = (error, entity) => ({
    type : API_ERROR,
    payload :  error,
    meta: {entity}
});
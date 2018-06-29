import {GET_COUNTRIES, ERROR_GET_COUNTRIES} from '../actions/index';

const initialState = null;

export const CountriesReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_COUNTRIES:
            return action.payload;
        case ERROR_GET_COUNTRIES:
            return action.error;
        default:
            return state;
    }
}
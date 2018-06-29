import {GET_MORTALITY, ERROR_GET_COUNTRIES, REMOVE_MORTALITY_DETAILS} from '../actions/index';

const nameInitialState = [];

export const MortalityReducer = (state = nameInitialState, action) => {
    switch (action.type) {
        case GET_MORTALITY:
            return [
                {
                    country : action.payload.country,
                    male : action.payload.male,
                    female : action.payload.female
                },
                ...state
            ];
        case REMOVE_MORTALITY_DETAILS:
            let eltToRemoveIndex = action.payload;
            if (eltToRemoveIndex > -1) {
                return state.filter( (elt, index) => {if (index != eltToRemoveIndex ) return elt })
            }
            return state;
        case ERROR_GET_COUNTRIES:
            return state
        default:
            return state
    }
}
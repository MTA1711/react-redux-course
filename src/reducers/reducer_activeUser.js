import { USER_SELECTED } from '../actions/index';

const nameInitialState = {};

export const ActiveUserReducer = (state = nameInitialState, action) => {
    switch (action.type) {
        case USER_SELECTED:
            return action.payload;
        default:
            return state;
    }
}
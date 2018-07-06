import {API_REQUEST, apiSuccess, apiError} from '../../actions/api.actions';
import axios from 'axios';

export const apiMiddleware = ({dispatch}) => next => action => {
    console.log("inside apiMiddleware", action)
    next(action);

    if (action.type == API_REQUEST) {
        let {method, url, entity, success} = action.meta;
        axios({
            method: method,
            url: url,
            data: action.payload
        })
        .then  ( response => {
            
            if ( success ) {
                if (method == 'delete') {
                    dispatch ( success(action.payload ) );
                } else {
                    console.log("response", response)
                    dispatch ( success(response.data ) );
                }
            }
                
        })
        .catch ( error => {
            console.error (error)
            dispatch ( apiError(error, entity ) );
        })

    }
}
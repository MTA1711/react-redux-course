import axios from 'axios';

export const GET_COUNTRIES = "GET_COUNTRIES";
export const ERROR_GET_COUNTRIES = "ERROR_GET_COUNTRIES";
export const GET_MORTALITY = "GET_MORTALITY";
export const REMOVE_MORTALITY_DETAILS = "REMOVE_MORTALITY_DETAILS";

const COUNTRY_URL = "http://api.population.io:80/1.0/countries";
const API_URL = "http://api.population.io:80/1.0/";
const DEFAULT_PARAM = "25/today/";

export const getCountries = () => {
    console.log("getCountries");
    const fetchCountries = (dispatch) => {
        axios.get(COUNTRY_URL)
        .then( response => {
            dispatch( {type:GET_COUNTRIES, payload: response.data.countries} );
        })
        .catch( error => {
            dispatch( {type:ERROR_GET_COUNTRIES, error: error} )
        });
    }
    return fetchCountries;
}

export const getMortality = (country) => {
    console.log("getMortality");
    const fetchData = (dispatch) => {
        axios.get( `${API_URL}mortality-distribution/${country}/male/${DEFAULT_PARAM}` )
        .then( responseMale => {
            axios.get( `${API_URL}mortality-distribution/${country}/female/${DEFAULT_PARAM}` )
            .then( responseFemale => {
                console.log("responseMale", responseMale)
                console.log("responseFemale", responseFemale)
                dispatch( 
                    {
                        type : GET_MORTALITY,
                        payload : {
                            country : country,
                            male : responseMale.data.mortality_distribution,
                            female : responseFemale.data.mortality_distribution
                        }
                    }
                );
            })
        })
        .catch( error => {
            dispatch( {type:ERROR_GET_COUNTRIES, error: error} )
        });
    }
    return fetchData;
}

export const removeMortalityDetails = (countryIndex) => {
    return {
        type : REMOVE_MORTALITY_DETAILS,
        payload: countryIndex
    };
}
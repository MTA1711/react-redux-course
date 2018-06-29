import React from 'react';
const BASE_URL = "http://www.sciencekids.co.nz/images/pictures/flags680/";

const Flag = ({country, className}) => {
    return (
        <div>
            <img className={className} src= {`${BASE_URL}${country}.jpg`} />
        </div>
    )
}

export default Flag;
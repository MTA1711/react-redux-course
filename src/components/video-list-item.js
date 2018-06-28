import React from 'react';
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";
const VideoListItem = (props) => {
    let movie = props.movie;
    //console.log(movie)
    return (
        <li className="list-group-item" onClick={handleClick}>
            <div className="media">
                <div className="media-left">
                    <img src={`${IMAGE_BASE_URL}${movie.poster_path}`} height="100px" width="100px" className="media-object img-rounded"/>
                </div>
            
                <div className="media-body">
                    <h5 className="title-list-item">{movie.title}</h5>
                </div>
            </div>
            
        </li>
    )
    function handleClick() {
        props.callBack(movie);
    }
}

export default VideoListItem;
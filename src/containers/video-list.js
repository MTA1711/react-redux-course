import React, {Component} from 'react';
import VideoListItem from '../components/video-list-item';

const VideoList = (props) => {
    const {movieList} = props;
    let movies = [];

    if (movieList != null && movieList.length > 0 ) {
        movies = movieList;
    }
    return (
        <div>
            <ul>
                {
                    movies.map(elt => {
                        return <VideoListItem key={elt.id} movie={elt} callBack={receiveCallBack}/>
                    })
                }
                
            </ul>
        </div>
    );

    function receiveCallBack(movie) {
        console.log("VideoList receiveCallBack", movie.title);
        props.callBack(movie);
    }
}

export default VideoList;
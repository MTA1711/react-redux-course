import React, {Component} from 'react';
import axios from 'axios';

import SearchBar from '../components/search-bar';
import VideoList from './video-list';
import VideoDetail from '../components/video-detail';
import Video from '../components/video';

const API_END_POINT = "https://api.themoviedb.org/3/";
const POPULAR_MOVIES_URL = "discover/movie?language=fr&sort_by=popularity.desc&include_adult=false&append_to_response=images";
const SEARCH_URL = "search/movie?language=fr&include_adult=false";
const API_KEY = "api_key=64722f8e56195153baf53b2bca963c36";


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {movieList: {}, currentMovie:{}};
    }

    componentWillMount() {
        this.initMovies();
    }
    render() {
        return (
            <div>
                <div className="search-bar">
                    <SearchBar callBack={this.onClickSearch.bind(this)}/>
                </div>
                <div className="row">
                    <div className="col-md-8">
                        <Video youtubeKey={this.state.currentMovie.youtubeKey}/>
                        <VideoDetail title={this.state.currentMovie.title} description={this.state.currentMovie.overview}/>
                    </div>
                    <div className="col-md-4">
                        <VideoList movieList={this.state.movieList} callBack={this.onClickListItem.bind(this)}/>
                    </div>    
                </div>
            </div>
        );

        
    }

    initMovies() {
        axios.get(`${API_END_POINT}${POPULAR_MOVIES_URL}&${API_KEY}`)
        .then( response => {
            console.log(response);
            this.setState( {movieList: response.data.results.slice(1,6), currentMovie: response.data.results[0]}, () => {
                this.applyVideoToCurrentMovie();
            } );
        });
    }

    applyVideoToCurrentMovie(){
        axios.get(`${API_END_POINT}movie/${this.state.currentMovie.id}?include_adult=false&append_to_response=videos&${API_KEY}`)
        .then( response => {
            const youtubeKey = response.data.videos.results[0].key;
            let newCurrentMovieState = this.state.currentMovie;
            newCurrentMovieState.youtubeKey = youtubeKey;
            this.setState({currentMovie: newCurrentMovieState});
        });
    }

    onClickListItem(movie) {
        this.setState({currentMovie: movie}, () => {
            this.applyVideoToCurrentMovie();
            this.setRecommendation();
        })
    }

    onClickSearch(searchText) {
        console.log("searchText", searchText);
        if (searchText) {
            axios.get(`${API_END_POINT}${SEARCH_URL}&${API_KEY}&query=${searchText}`)
            .then( response => {
                console.log(response);
                if (response.data && response.data.results[0]) {
                    if(response.data.results[0].id != this.state.currentMovie.id) {
                        this.setState( {currentMovie: response.data.results[0]}, () => {
                            this.applyVideoToCurrentMovie();
                            this.setRecommendation();
                        } );
                    }
                } 
            });
        }
    }

    setRecommendation() {
        axios.get(`${API_END_POINT}movie/${this.state.currentMovie.id}/recommendations?${API_KEY}&language=fr`)
        .then( response => {
            this.setState( {movieList: response.data.results.slice(0,5)});
        });
    }
    
}
export default App;
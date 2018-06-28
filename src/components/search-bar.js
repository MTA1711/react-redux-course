import React, {Component} from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {searchText:"", placeHolder:"Tapez votre film", intervalBeforeRequest:1000, lockRequest: false};
    }
    render() {
        return (
            <div className="row">
                <div className="col-md-8 input-group">
                    <input className="form-control" type="text" onChange={this.handleChange.bind(this)} placeholder={this.state.placeHolder}/>
                    <span className="input-group-btn">
                        <button className="btn btn-secondary" onClick={this.handleSearch.bind(this)}>Go</button>
                    </span>
                </div>
            </div>
        )
    }

    handleChange(event) {
        this.setState({searchText: event.target.value});
        if ( !this.state.lockRequest) {
            this.setState({lockRequest : true});
            setTimeout( () => {
                this.search()
            }, this.state.intervalBeforeRequest);
        }
    }

    handleSearch(event) {
        this.search();
    }

    search() {
        this.props.callBack(this.state.searchText);
        this.setState({lockRequest : false});
    }
}

export default SearchBar;
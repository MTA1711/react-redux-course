import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getCountries, getMortality } from '../actions/index';

class SearchBar extends Component {
    
    constructor(props) {
        super(props);
        this.state = {};
        this.state.selectedCountry = this.props.defaultCountry;
    }

    componentWillMount() {
        this.props.getCountries();
    }

    render () {
        if ( ! this.props.countries ) {
            return (
                <div className="search-bar row">
                    <select className="col-xs-12 input-group"></select>
                </div>
            )
        }
        return (
            <div className="search-bar row">
                <select className="col-xs-12 input-group" value={this.state.selectedCountry} onChange={(e) => this.chooseCountry(e)}>
                    {
                        this.props.countries.map(country => {
                            return <option value={country} key={country}> {country} </option>
                        })
                    }
                </select>
            </div>
        )
    }

    chooseCountry(event) {
        this.setState({selectedCountry: event.target.value}, () => {
            this.props.getMortality(this.state.selectedCountry);
        });

    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        countries: state.countries
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return bindActionCreators( {getCountries, getMortality}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
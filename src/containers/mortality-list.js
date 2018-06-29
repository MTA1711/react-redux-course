import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getMortality } from '../actions/index';
import MortalityListItem from '../components/mortality-list-item';



class MortalityList extends Component {
    componentWillMount() {
        this.props.getMortality(this.props.defaultCountry);
    }
    render () {
        console.log("mortalityData", this.props.mortalityData)
        if ( !this.props.mortalityData || this.props.mortalityData.length == 0 ) {
            return (
                <div></div>
            );
        }
        return (
            <div className="demography-details">
                <div className="row list-header">
                    <div  className="col-md-2"><h4>Pays</h4></div>
                    <div  className="col-md-5"><h4>Homme</h4></div>
                    <div  className="col-md-5"><h4>Femme</h4></div>
                </div>
                {
                    this.props.mortalityData.map( (elt, index) => {
                        let maleData = this.buildChartData(elt.male);
                        let femaleData = this.buildChartData(elt.female);
                        return <MortalityListItem
                            key={index}
                            index={index}
                            country={elt.country} 
                            dataForMale={ maleData }
                            dataForFemale={ femaleData } />
                    })
                }
            </div>
        )
    }

    buildChartData(rawData) {
        let result = [];
        rawData.forEach(element => {
            if (element.age <= 101) {
                result.push([
                    Math.round(element.age),
                    Math.round(element.mortality_percent)
                ]);
            }
        });
        return result;
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        mortalityData: state.mortality

    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return bindActionCreators({getMortality}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(MortalityList);
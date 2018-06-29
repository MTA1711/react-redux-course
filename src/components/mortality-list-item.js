import React, { Component } from 'react';
import ReactChartkick, { ColumnChart } from 'react-chartkick';
import Chart from 'chart.js';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Flag from './flag';
import { removeMortalityDetails } from '../actions/index';

ReactChartkick.addAdapter(Chart);

const xTitle = "% Age";
const yTitle = "% Mortalite";



class MortalityListItem extends Component {
    constructor(props) {
        super(props);
    }

    render () {
        let {index, country, dataForMale, dataForFemale} = this.props;
        
        if (!country || !dataForFemale || !dataForMale) {
            return (
                <div></div>
            )
        }

        return (
            <div className="row mortality-list-item">
                <div className="remove-btn">
                    <a href="#" onClick={(e) => {this.deleteItem(e, index)} }>*</a>
                </div>
                <div  className="col-md-2">
                    <Flag className="medium-flag" country={country} />
                </div>
                <div  className="col-md-5">
                    <ColumnChart xtitle={xTitle} ytitle={yTitle} data={dataForMale}  max={30}/>
                </div>
                <div  className="col-md-5">
                    <ColumnChart xtitle={xTitle} ytitle={yTitle} data={dataForFemale} max={30} />
                </div>
            </div>
        )
    }

    deleteItem(e, index) {
        e.preventDefault();
        console.log("index", index);
        this.props.removeMortalityDetails(index);
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return bindActionCreators({removeMortalityDetails}, dispatch)
}

const mapStateToProps = (state, ownProps) => {
    return {
        
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(MortalityListItem)

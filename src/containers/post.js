import React, { Component } from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';

import { readPost } from '../actions/index';
import PostContent from '../components/post-content';

class Post extends Component {
    componentWillMount() {
        this.props.readPost(this.props.params.id);
    }

    render () {
        return (
            <div>
                {this.renderPost()}
            </div>
        )
    }

    renderPost() {
        if (this.props.post) {
            return <PostContent post={this.props.post}/>
        }
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        post: state.activePost
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return bindActionCreators({readPost}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Post)
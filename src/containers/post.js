import React, { Component } from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';

//import { readPost } from '../actions/index';
import { requestReadPost } from '../actions/posts.actions';
import PostContent from '../components/post-content';

class Post extends Component {
    componentWillMount() {
        this.props.requestReadPost(this.props.params.id);
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
    return bindActionCreators({requestReadPost}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Post)
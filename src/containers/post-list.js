import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ReactCSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import {Link} from 'react-router';

import { readAllPost, deletePost } from '../actions/index';
import PostListItem from '../components/post-list-item';

class PostList extends Component {
    componentWillMount() {
        this.props.readAllPost();
    }
    render () {
        return (
            <div>
                <h1>List des Posts</h1>
                <div className="button-add">
                    <Link to="/create-post"> <button className="btn btn-primary btn-circle btn-lg">+</button></Link>
                </div>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>Titre</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <ReactCSSTransitionGroup component="tbody" transitionEnterTimeout={300} transitionLeaveTimeout={500} transitionName="fade">
                        {this.renderPosts()}
                    </ReactCSSTransitionGroup>
                </table>
            </div>
        )
    }
    renderPosts() {
        let {posts} = this.props;
        if (posts) {
            return posts.map (post => {
                return <PostListItem post={post} key={post.id} deletePostCallback={ (post) => this.deletePostCallback(post) }/>
            })
        }
    }

    deletePostCallback(post) {
        console.log("deletePost", post)
        this.props.deletePost(post.id);
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        posts: state.posts
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return  bindActionCreators({readAllPost, deletePost}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PostList)
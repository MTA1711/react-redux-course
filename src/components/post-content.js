import React from 'react';
import {Link} from 'react-router';
const PostContent = ({post}) => {
    return (
        <div>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            <p>Auteur: {post.author}</p>

            <p><button className="btn btn-default"><Link to="/">Retour</Link></button></p>
        </div>
    )
}

export default PostContent;
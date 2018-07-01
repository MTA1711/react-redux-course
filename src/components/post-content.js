import React from 'react';
import {Link} from 'react-router';
const PostContent = ({post}) => {
    return (
        <div>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            <p>Auteur: {post.author}</p>

            <p><Link to="/"><button className="btn btn-default">Retour</button></Link></p>
        </div>
    )
}

export default PostContent;
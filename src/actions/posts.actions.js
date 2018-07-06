export const POSTS = '[Posts]';

export const DELETE_POST   = `${POSTS} Delete`;
export const CREATE_POST   = `${POSTS} Create`;
export const READ_POST     = `${POSTS} Read`;
export const READ_ALL_POST = `${POSTS} Read All`;

export const REQUEST_DELETE_POST   = `${POSTS} Request Delete`;
export const REQUEST_CREATE_POST   = `${POSTS} Request Create`;
export const REQUEST_READ_POST     = `${POSTS} Request Read`;
export const REQUEST_READ_ALL_POST = `${POSTS} Request Read All`;

export const deletePost = (postId) => ({
    type : DELETE_POST,
    payload : postId
});

export const createPost = (post) => ({
    type : CREATE_POST,
    payload : post
});

export const readPost = (post) => ({
    type : READ_POST,
    payload : post
});

export const readAllPost = (posts) => ({
    type : READ_ALL_POST,
    payload : posts
});


export const requestDeletePost = (postId) => ({
    type : REQUEST_DELETE_POST,
    payload : postId,
    success : deletePost,
});

export const requestCreatePost = (post) => ({
    type : REQUEST_CREATE_POST,
    payload : post,
    success : createPost,
});

export const requestReadPost = (postId) => ({
    type : REQUEST_READ_POST,
    payload : postId,
    success : readPost
});

export const requestReadAllPost = (posts) => ({
    type : REQUEST_READ_ALL_POST,
    success : readAllPost,
});

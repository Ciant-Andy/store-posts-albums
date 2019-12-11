import axios from 'axios';

export function load(){
    return (dispatch) =>{
        return axios.get("http://jsonplaceholder.typicode.com/posts").then((response)=>{
             dispatch(loadPosts(response.data));
        })
    }
}
export function loadOne(id){
    return (dispatch) =>{
        return axios.get("http://jsonplaceholder.typicode.com/posts/"+id).then((response)=>{
             dispatch(loadPostById(response.data));
        })
    }
}
export function loadPosts(posts){
    return {
        type: "LOAD_POSTS",
        posts: posts
    }
}

export function changePost(post,idChangePost){
    return {
        type: "CHANGE_POST",
        post: post,
        idChangePost: idChangePost
    }
}

export function deletePost(idDeletePost){
    return {
        type: "DELETE_POST",
        idDeletePost: idDeletePost
    }
}

export function addPost(post){
    return {
        type: "ADD_POST",
        newPost: post
    }
}

export function loadPostById(currentPost){
    return {
        type: "LOAD_POST_BY_ID",
        currentPost: currentPost
    }
}
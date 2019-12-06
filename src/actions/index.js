import axios from 'axios';

export function load(){
    return (dispatch) =>{
        return axios.get("http://jsonplaceholder.typicode.com/posts").then((response)=>{
             dispatch(loadPosts(response.data));
        })
    }
}
export function loadPosts(posts){
    return {
        type: "LOAD_POSTS",
        posts: posts
    }
}
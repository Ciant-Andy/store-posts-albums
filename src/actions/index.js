import axios from 'axios';

export function load(){
    return (dispatch) =>{
        return axios.get("http://jsonplaceholder.typicode.com/posts").then((response)=>{
             dispatch(loadPosts(response.data));
        })
    }
}
export function loadComments(id){
    return (dispatch) =>{
        return axios.get("http://jsonplaceholder.typicode.com/comments?postId="+id).then((response)=>{
             dispatch(loadCommentsFunc(response.data));
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
export function loadCommentsFunc(comments){
    return {
        type: "LOAD_COMMENTS",
        comments: comments
    }
}

export function changePost(post,idChangePost){
    return {
        type: "CHANGE_POST",
        post: post,
        idChangePost: idChangePost
    }
}
export function loadByPageNumber(page=1){
    return {
        type: "LOAD_BY_PAGE_NUMBER",
        page: page,
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
//Albums

export function loadAlbumsFunc(){
    return (dispatch) =>{
        return axios.get("http://jsonplaceholder.typicode.com/albums").then((response)=>{
             dispatch(loadAlbums(response.data));
        })
    }
}
export function loadPhotoAlbums(id){
            return (dispatch) =>{
                return axios.get("http://jsonplaceholder.typicode.com/photos?albumId="+id).then((response)=>{
                     dispatch(loadAlbumsPhotos(response.data));
                })
            }
        }
export function loadAlbumsPhotos(currentPhotos){
            return {
                type: "LOAD_ALBUMS_BY_ID",
                currentPhotos: currentPhotos
            }
        }
export function loadAlbums(albums){
            return {
                type: "LOAD_ALBUMS",
                albums: albums
            }
        } 
export function changeAlbums(album,idChangeAlbums){
            return {
                type: "CHANGE_AlBUMS",
                album: album,
                idChangeAlbums: idChangeAlbums
            }
        }
export function deleteAlbums(idDeleteAlbums){
            return {
                type: "DELETE_ALBUMS",
                idDeleteAlbums: idDeleteAlbums
            }
        }
//добей это пагинация
        export function loadByAlbumPageNumber(albumPage=1){
            return {
                type: "LOAD_BY_ALBUM_PAGE_NUMBER",
                albumPage: albumPage,
            }
        }
 

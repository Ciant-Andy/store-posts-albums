/*
import {fetchPostsPending, fetchPostsSuccess, fetchPostsError} from '../../actions';

function fetchPosts() {
    return dispatch => {
        dispatch(fetchPostsPending());
        return fetch("https://jsonplaceholder.typicode.com/posts")
          .then(res => res.json())
          .then(json => {
            dispatch(fetchPostsSuccess(json.posts));
            return json.products;
          })
          .catch(error => dispatch(fetchPostsError(error)));
      };
}
export default fetchPosts;
*/
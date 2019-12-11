
const initialState = {
    posts: [{id:0,title:'dfd'},{id:2}],
    loading: false,
    error: null,
    currentPost: {id:0,title:'',body:""}
  };
  

export const reducer = (state=initialState, action) => {
    switch (action.type){
        case 'LOAD_POSTS': 
          if (!state.loading){
            return {
              ...state,
              loading: true,
              posts: action.posts
            };
          } else {
            return {
              ...state
            }
          }  
        case 'LOAD_POST_BY_ID':
            return {
                ...state,
              currentPost: action.currentPost
            };
        case 'DELETE_POST':
          state.splice(action.idDeletePost, 1)
          console.log(state);
            return {
              ...state,
            }
        case 'CHANGE_POST':
          state.posts[action.idChangePost-1]= action.post;
            return {
              ...state,
            }
        default: 
            return state;
            
    }
}

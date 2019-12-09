
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
        case 'CHANGE_POST':
          console.log(action.post);
          state.posts[action.idChangePost-1]= action.post;
          console.log(state.posts);
            return {
              ...state,
            }
        default: 
            return state;
            
    }
}

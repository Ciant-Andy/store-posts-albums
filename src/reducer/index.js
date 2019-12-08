
const initialState = {
    posts: [{id:0,title:'dfd'},{id:2}],
    loading: false,
    error: null,
    currentPost: {id:0,title:'',body:""}
  };
  

export const reducer = (state=initialState, action) => {
    switch (action.type){
        case 'LOAD_POSTS':  
            return {
                ...state,
                loading: true,
                posts: action.posts
              };
        case 'LOAD_POST_BY_ID':
            console.log(action.currentPost);
            return {
                ...state,
              currentPost: action.currentPost
            };
        default: 
            return state;
            
    }
}

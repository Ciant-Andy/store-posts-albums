
const initialState = {
    posts: [{id:0,title:'dfd'},{id:2}],
    loading: false,
    error: null
  };
  

export const reducer = (state=initialState, action) => {
    switch (action.type){
        case 'LOAD_POSTS':  
            return {
                ...state,
                loading: true,
                posts: action.posts
              };
        default: 
            return state;
            
    }
}

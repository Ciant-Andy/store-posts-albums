
const initialState = {
    posts: [{id:0,title:'dfd'},{id:2}],
    loading: false,
    error: null,
    currentPost: {id:0,title:'',body:""},
    postsOnPage:[{id:0,title:""}]
  };
  

export const reducer = (state=initialState, action) => {
    switch (action.type){
        case 'LOAD_POSTS': 
          if (!state.loading){
           let firstPosts = state.postsOnPage=action.posts.splice(0,10);
            return {
              ...state,
              loading: true,
              posts: action.posts,
              postsOnPage:firstPosts
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
         let newPost=state.posts.filter((post)=> post.id!=action.idDeletePost )
         state.posts=newPost; 
            return {
              ...state,
            }
        case 'CHANGE_POST':
            let newPostChange=state.posts.map((post)=> post.id==action.idChangePost? post=action.post: post)
            state.posts=newPostChange; 
            return {
              ...state,
            }
        case 'ADD_POST':
          let newId=  state.posts[state.posts.length-1].id
          action.newPost.id=newId+1;
          state.posts.push(action.newPost);
            return {
              ...state,
            }
        default: 
            return state;
            
    }
}

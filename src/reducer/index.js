
const initialState = {
    posts: [{id:0,title:'dfd'},{id:2}],
    loading: false,
    error: null,
    currentPost: {id:0,title:'',body:""},
    postsOnPage:[{id:0,title:""}],
    commentsOnPage:[]
  };
  

export const reducer = (state=initialState, action) => {
    switch (action.type){
        case 'LOAD_POSTS': 
          if (!state.loading){
           let newFirstPost=[...action.posts]
           let firstPosts=newFirstPost.splice(0,10);
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
        case 'LOAD_BY_PAGE_NUMBER':
            let newPage=0;
            let newCurrentPosts = [...state.posts]
            if (action.page === 1){
                 newPage=0;
            }
            else{
              newPage=(action.page*10)-10;
            }
            let newCurrentPostsOnPage = newCurrentPosts.splice(newPage,10);   
            return {
                ...state,
                postsOnPage: newCurrentPostsOnPage
            };
        case 'LOAD_COMMENTS':
            return {
                ...state,
                commentsOnPage: action.comments
            };
        case 'DELETE_POST':
         let newPost=state.posts.filter((post)=> parseInt(post.id,10)!==parseInt( action.idDeletePost, 10))
         state.posts=newPost; 
         let newDelete=0;
            let newDeleteCurrentPosts = [...state.posts]
            if (action.page === 1){
                 newDelete=0;
            }
            else{
              newDelete=(action.page*10)-10;
            }
            let newDeleteCurrentPostsOnPage = newDeleteCurrentPosts.splice(newDelete,10);   
            return {
              ...state,
              postsOnPage: newDeleteCurrentPostsOnPage
            }
        case 'CHANGE_POST':
            let newPostChange=state.posts.map((post)=> parseInt(post.id,10)===parseInt(action.idChangePost,10)? post=action.post: post)
            state.posts=newPostChange; 
            let newChange=0;
            let newChangeCurrentPosts = [...state.posts]
            if (action.page === 1){
                 newChange=0;
            }
            else{
              newChange=(action.page*10)-10;
            }
            let newChangeCurrentPostsOnPage = newChangeCurrentPosts.splice(newChange,10);   
            return {
              ...state,
              postsOnPage: newChangeCurrentPostsOnPage
              
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

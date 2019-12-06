import React from 'react';
import './posts.css';
import PostsBlock from '../posts-block/posts-block';


 class Posts extends React.Component{
    render() {
        return  ( 
            <div>
                <h2>Posts</h2>
                <div className="com-md-12">
                    <div class="container">
                        <div class="row">
                            <PostsBlock></PostsBlock>
                        </div>
                    </div>
                </div>
            </div>
        );
}};

export default Posts;
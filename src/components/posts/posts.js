import React from 'react';
import './posts.css';
import PostsBlock from '../posts-block/posts-block';
import {Link} from  'react-router-dom';


 class Posts extends React.Component{
    render() {
        return  ( 
            <div>
                <h2>Posts</h2><button><Link to="addPost">ADD NEW COOL POST</Link></button>
                <div className="com-md-12">
                    <div className="container">
                        <div className="row">
                            <PostsBlock></PostsBlock>
                        </div>
                    </div>
                </div>
            </div>
        );
}};

export default Posts;
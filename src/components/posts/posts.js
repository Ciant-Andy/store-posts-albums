import React from 'react';
import './posts.css';
import PostsBlock from '../posts-block/posts-block';
import {Link} from  'react-router-dom';
import * as actionsCreators from '../../actions';
import {connect} from 'react-redux';
import PostsPaginations from '../posts-paginations/postPaginations'


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
                            <div className="pagination">
                                <PostsPaginations></PostsPaginations>
                            </div>
                    </div>
                </div>
            </div>
        );
}};

const mapStateToProps = (state)=>{
    return state;
}

export default connect(mapStateToProps,actionsCreators)(Posts);
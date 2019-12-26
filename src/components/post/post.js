import React from 'react';
import {connect} from 'react-redux';
import * as actionsCreators from '../../actions';
import {Link} from  'react-router-dom';
import Comment from '../comments/comments'

 class Post extends React.Component{
    constructor(props){
        super(props);
        this.id = props.match.params.id
    }
    componentDidMount() {
        this.props.loadOne(this.id);
      }
    
    render() {
    
            return  ( 
            <div>
              <Link to={`changepost/${this.id}`}>Change post</Link>
              <Link to="/posts" onClick={()=>this.props.deletePost(this.id)} >Delete post</Link>
              <h1>{this.props.currentPost.title}</h1>
              <p>{this.props.currentPost.body}</p>
              Comment: <br></br><br></br>
              <Comment></Comment>
            </div>
        );
}};

const mapStateToProps = (state)=>{
    return state;
}

export default connect(mapStateToProps,actionsCreators)(Post);

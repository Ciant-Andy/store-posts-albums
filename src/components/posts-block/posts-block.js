import React from 'react';
import './posts.css';
import {connect} from 'react-redux';
import * as actionsCreators from '../../actions'
import {Link} from  'react-router-dom';

 class PostsBlock extends React.Component{ 
    componentDidMount() {
            this.props.load();
      }
    
    render() {
        return  ( this.props.postsOnPage.map((item)=> 
    <div  key={item.id} className="col-md-2 post">
        <Link to={`post/${item.id}`}> <p>{item.title}</p></Link>
    </div>
    ));
}};
const mapStateToProps = (state)=>{
    return state;
}

export default connect(mapStateToProps,actionsCreators)(PostsBlock);
import React from 'react';
import './posts.css';
import {connect} from 'react-redux';
import * as actionsCreators from '../../actions'

 class PostsBlock extends React.Component{
    componentDidMount() {
        this.props.load();
      }
    render() {
        return  ( this.props.posts.map((item)=> 
    <div key={item.id} className="col-md-2 post">
        <p>{item.title}</p>
    </div>
    ));
}};
const mapStateToProps = (state)=>{
    return state;
}
/*
<button className="btn btn-primary btn-lg" onClick={()=> this.props.load()}>Oru</button>
*/  
export default connect(mapStateToProps,actionsCreators)(PostsBlock);
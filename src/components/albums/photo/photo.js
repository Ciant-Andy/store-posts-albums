import React from 'react';
import {connect} from 'react-redux';
import * as actionsCreators from '../../../actions';
import {Link} from  'react-router-dom';

 class Album extends React.Component{
    constructor(props){
        super(props);
        this.id = props.match.params.id
    }
    componentDidMount() {
        this.props.loadPhotoAlbums(this.id);
      }
    
    render() {
    
            return  ( 
            <div>
              <p>sdsd</p>
              <Link to={`changepost/${this.id}`}>Change albums</Link>
              <Link to="/posts" onClick={()=>this.props.deletePost(this.id)} >Delete post</Link>
              <h1>{}</h1>
            </div>
        );
}};

const mapStateToProps = (state)=>{
    return state;
}

export default connect(mapStateToProps,actionsCreators)(Album);

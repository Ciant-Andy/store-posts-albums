import React from 'react';
import './albums-block.css';
import {connect} from 'react-redux';
import * as actionsCreators from '../../../actions'
import {Link} from  'react-router-dom';

 class AlbumsBlock extends React.Component{ 
    componentDidMount() {
            this.props.loadAlbumsFunc();
      }
    
    render() {
        return  ( this.props.albumsOnPage.map((item)=> 
    <div  key={item.id} className="col-md-2 post">
        <Link to={`album/${item.id}`}> <p>{item.title}</p></Link>
    </div>
    ));
}};
const mapStateToProps = (state)=>{
    return state;
}

export default connect(mapStateToProps,actionsCreators)(AlbumsBlock);
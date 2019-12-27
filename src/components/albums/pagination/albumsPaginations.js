import React from 'react';
import './albumsPaginations.css';
import {connect} from 'react-redux';
import * as actionsCreators from '../../../actions'

 class AlbumsPaginations extends React.Component{
      
    
    render() {
        let pageNumbers=[]; 
        for (let i=1;i<=Math.ceil(this.props.albums.length/10);i++){
            pageNumbers.push(i)
        }
        return  ( pageNumbers.map((item)=> 
            <p key={item} onClick={() => this.props.loadByAlbumPageNumber(item)} >{item}</p>
    ));
}};
const mapStateToProps = (state)=>{
    return state;
}
 
export default connect(mapStateToProps,actionsCreators)(AlbumsPaginations);
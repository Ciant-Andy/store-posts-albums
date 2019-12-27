import './albums.css';
import React from 'react';
import AlbumsBlock from '../albumsBlock/albums-block';
import {Link} from  'react-router-dom';
import * as actionsCreators from '../../../actions';
import {connect} from 'react-redux';
import AlbumsPaginations from '../pagination/albumsPaginations'


 class Albums extends React.Component{
   
    render() {
        return  ( 
            <div>
                <h2>Albums</h2><button><Link to="addAlbums">ADD NEW HOT ALBUM</Link></button>
                <div className="com-md-12">
                    <div className="container">
                        <div className="row">
                            <AlbumsBlock></AlbumsBlock>
                        </div>
                            <div className="pagination">
                                <AlbumsPaginations></AlbumsPaginations>
                            </div>
                    </div>
                </div>
            </div>
        );
}};

const mapStateToProps = (state)=>{
    return state;
}

export default connect(mapStateToProps,actionsCreators)(Albums);
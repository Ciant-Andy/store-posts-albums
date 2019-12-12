import React from 'react';
import './postPaginations.css';
import {connect} from 'react-redux';
import * as actionsCreators from '../../actions'
import {Link} from  'react-router-dom';

 class PostsPaginations extends React.Component{
      
    
    render() {
        let pageNumbers=[]; 
        for (let i=1;i<=Math.ceil(this.props.posts.length/10);i++){
            pageNumbers.push(i)
        }
        return  ( pageNumbers.map((item)=> 
            <a key={item} onClick={() => this.props.loadByPageNumber(item)} >{item}</a>
    ));
}};
const mapStateToProps = (state)=>{
    return state;
}
 
export default connect(mapStateToProps,actionsCreators)(PostsPaginations);
import React from 'react';
import {connect} from 'react-redux';
import * as actionsCreators from '../../actions'
import {Link} from  'react-router-dom';

 class Comments extends React.Component{
    componentDidMount() {
        this.props.loadComments(1);
      }
   
    render() {

        return  ( this.props.commentsOnPage.map((item)=> 
            <a key={item}>{item.body} </a>
    ));
}};
const mapStateToProps = (state)=>{
    return state;
}
 
export default connect(mapStateToProps,actionsCreators)(Comments);
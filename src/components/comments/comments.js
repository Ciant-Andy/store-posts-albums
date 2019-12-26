import React from 'react';
import {connect} from 'react-redux';
import * as actionsCreators from '../../actions'

 class Comments extends React.Component{
    componentDidMount() {
        this.props.loadComments(1);
      }
   
    render() {
        return  ( this.props.commentsOnPage.map((item)=> 
           <div key={item.id}>
               <p style={{float:'left'}}><b>{item.email}</b></p><br></br>
               <p >{item.body} </p> 
               
               <br></br> </div> 
    ));
}};
const mapStateToProps = (state)=>{
    return state;
}
 
export default connect(mapStateToProps,actionsCreators)(Comments);
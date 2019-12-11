import React from 'react';
import './postPaginations.css';
import {connect} from 'react-redux';
import * as actionsCreators from '../../actions'
import {Link} from  'react-router-dom';

 class PostsPaginations extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            active: false,
        };
    }  
      toggleClass() {
          console.log(this.state);
        const currentState = this.state.active;
        this.setState({ active: !currentState });
    };
    
    render() {
        return  ( this.props.postsOnPage.map((item)=> 
            <a className={this.state.active && 'active'} onClick={() => this.setState({active: !this.state.active})} >1</a>
    ));
}};
const mapStateToProps = (state)=>{
    return state;
}
 
export default connect(mapStateToProps,actionsCreators)(PostsPaginations);
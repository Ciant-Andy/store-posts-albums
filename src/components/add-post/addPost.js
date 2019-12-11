import React from 'react';
import {connect} from 'react-redux';
import * as actionsCreators from '../../actions';
import { Redirect } from 'react-router';
import './addPost.css';

 class addPost extends React.Component{
    constructor(props){
        super(props);
        this.id = props.match.params.id;
        this.state = {title: '', body:''};
        this.handleChangeTitle = this.handleChangeTitle.bind(this);
        this.handleChangeBody = this.handleChangeBody.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChangeTitle(event) {
      this.setState({title: event.target.value});
      }
    handleChangeBody(event) {
      this.setState({body: event.target.value});
      }
      handleSubmit(event) {
       this.props.addPost({id:this.id, title:this.state.title ,body:this.state.body})
        event.preventDefault();
        this.setState({redirect: true});
      }
    render() {
      if (this.state.redirect){
        return <Redirect push to="/posts" />;
      }
        return  ( 
          <form onSubmit={this.handleSubmit} className="changePostForm">
                Title:<br/>
                <input type="text" value={this.state.title} onChange={this.handleChangeTitle}/><br/>
                Body:<br/>
                <input type="text" value={this.state.body} onChange={this.handleChangeBody}/><br/>
                <input type="submit" value="Submit"/>
          </form>
        );
}};
  
const mapStateToProps = (state)=>{
    return state;
}

export default connect(mapStateToProps,actionsCreators)(addPost);

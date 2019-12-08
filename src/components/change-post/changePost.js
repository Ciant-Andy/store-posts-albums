import React from 'react';
import {connect} from 'react-redux';
import * as actionsCreators from '../../actions';
import {Link} from  'react-router-dom';

 class ChangePost extends React.Component{
    constructor(props){
        super(props);
        this.title="";
        this.id = props.match.params.id;
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.title= event.target.value;
      }
    componentDidMount() {
        this.props.loadOne(this.id);
      }
      handleSubmit(event) {
        alert('Отправленное имя: ' + this.title);
        event.preventDefault();
      }
    render() {
        return  ( 
            <div>
                  <form onSubmit={this.handleSubmit}>
            <input type="text"  onChange={this.handleChange}/>
            <input type="submit" value="Submit"/>
          </form>
               <h1>{this.props.currentPost.title}</h1>
               <p>{this.props.currentPost.body}</p>
            </div>
        );
}};
  
const mapStateToProps = (state)=>{
    return state;
}

export default connect(mapStateToProps,actionsCreators)(ChangePost);

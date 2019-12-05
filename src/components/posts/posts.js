import React from 'react';
import './posts.css';
import {connect} from 'react-redux';
import {load} from '../../actions'

 const Posts = ({state, load})=>{
    return (
    <div>
    <button className="btn btn-primary btn-lg" onClick={load}>Oru</button>
    <h2>Posts</h2>
 <h2>{state.posts[0].id}</h2>
    </div>
    );
};

const mapStateToProps = (state)=>{
    return {
        state: state
    };
}

const mapDispatchToProps=(dispatch)=>{
    return{
        load: ()=> dispatch(load())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Posts);
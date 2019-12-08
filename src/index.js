import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {reducer} from './reducer';
import {createStore, applyMiddleware } from "redux";
import {Header} from './components/app-header/app-header.js';
import {BrowserRouter as Router, Route} from  'react-router-dom';
import {Main} from './components/main/main';
import Posts from './components/posts/posts';
import {Albums} from './components/albums/albums';
import {Footer} from './components/app-footer/app-footer';
import {Provider} from 'react-redux';
import thunk from "redux-thunk";
import Post from "./components/post/post";
import ChangePost from "./components/change-post/changePost";

const store = createStore(reducer,applyMiddleware(thunk));

/*const {dispatch} = store;*/
/*const loadDispatch= bindActionCreators(load,dispatch);*/
/*load={() => loadDispatch("lol")}*/

ReactDOM.render(
    <Provider store={store}>
    <Router>
    <Header />
            <Route exact path="/" component={Main} />
            <Route path="/posts" component={Posts} />
            <Route path="/albums" component={Albums} />
            <Route path='/post/:id' exact component={Post} />
            <Route path='/post/changepost/:id' exact component={ChangePost} />
    <Footer/>
    </Router>
    </Provider>
    ,
    document.getElementById('root')); 






import React from 'react';
import './app-header.css'
import {Link} from  'react-router-dom';

export const Header = () =>{
        return (
            <nav className="navbar navbar-dark bg-primary">
                <div className="nav navbar-nav">
                    <Link className="nav-item nav-link active" to='/'>Main <span className="sr-only">(current)</span></Link>
                    <Link className="nav-item nav-link" to='/posts'>Posts</Link>
                    <Link className="nav-item nav-link" to='/albums'>Albums</Link>
                </div>
            </nav> 
        );
    
}
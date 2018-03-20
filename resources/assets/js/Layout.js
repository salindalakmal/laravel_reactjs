import React from 'react';
import { Link } from 'react-router-dom';
//import Header from './Header';
//import Footer from './Footer';

const Layout = props => ({
  	render() {
	    return (
	      	<div className="app-container">
	      		<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
		            <a className="navbar-brand" href="#">App</a>
		            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
		                <span className="navbar-toggler-icon"></span>
		            </button>
		            <div className="collapse navbar-collapse" id="navbarSupportedContent">
		                <ul className="navbar-nav mr-auto">
		                    <li className="nav-item active">
		                    	<Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
		                    </li>
		                    <li className="nav-item">
		                    	<Link className="nav-link" to="/add-item">Create Item</Link>
		                    </li>
		                    <li className="nav-item">
		                    	<Link className="nav-link" to="/display-item">Display Items</Link>
		                    </li>
		                </ul>
		            </div>
		        </nav>
	        	<main className="container">{props.children}</main>
	      	</div>
	    );
  	}
});

export default Layout;
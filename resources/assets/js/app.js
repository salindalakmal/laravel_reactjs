
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes React and other helpers. It's a great starting point while
 * building robust, powerful web applications using React + Laravel.
 */

require('./bootstrap');

/**
 * Next, we will create a fresh React component instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

//require('./components/Example');

import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Layout from './Layout';

import Home from './components/Home';
import CreateItem from './components/CreateItem';
import DisplayItem from './components/DisplayItem';
import EditItem from './components/EditItem';

render(
	
	  	<Router>
	      	<Layout>
	        	<Route exact path="/" component={Home} />
	        	<Route path="/add-item" component={CreateItem} />
	        	<Route path="/display-item" component={DisplayItem} />
	        	<Route path="/edit/:id" component={EditItem} />
	      	</Layout>
	  	</Router>
  	, document.getElementById('root'));









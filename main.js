import React from 'react';
import {render} from 'react-dom';
import {Router, Route, hashHistory} from 'react-router'


import List from './listcont';
import ContactCont from './contactcont';



var Site = (
	<Router history={hashHistory}>
		<Route path="/" component={List} />	
		<Route path="/contact/:contactId" component={ContactCont} />


	</Router>
	)


render(Site, document.getElementById('app'));
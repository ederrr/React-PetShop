import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'font-awesome/css/font-awesome.min.css';
import './index.css';
import App from './components/App';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(


	<BrowserRouter>
		<App  />
	</BrowserRouter>

	, document.getElementById('root'));

import React, {Component} from 'react';
import Busca from './Busca';
import Login from './Login';
import logo from '../assets/img/logo.png';
import {Link} from 'react-router-dom';

class Topo extends Component{
	render(){

		return(
			<header>
				<div className="row m-auto py-2 ">
					<Link id="logo" to="/" className="col-lg-3 m-auto">
						<img className="img-fluid w-100" id="img-logo" src={logo} alt="logo da pagina"/>
					</Link>
					<Busca/>
					<Login/>
				</div>
			</header>
		);
	}
}

export default Topo;
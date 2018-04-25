import React, {Component} from 'react';
import Busca from './Busca';
import Login from './Login';
import logo from '../assets/img/logo.png';

class Topo extends Component{
	render(){

		return(
			<header>
				<div className="row m-auto py-2 ">
					<div id="logo" className="col-lg-3 m-auto">
						<img className="img-fluid w-100" id="img-logo" src={logo} alt="logo da pagina"/>
					</div>
					<Busca/>
					<Login/>
				</div>
			</header>
		);
	}
}

export default Topo;
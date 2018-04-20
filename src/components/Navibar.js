import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Navibar extends Component{
	render(){

		return(
			<nav className="navbar navegacao rounded p-0 ">
 
				<div className="container-fluid">
					<div className="navbar-header desktop-hide">
						<button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
							<span className="fa fa-bars"></span>
						</button>
					</div>

				</div>


				<div className="container-fluid navbar-collapse m-0 p-0 " id="myNavbar">

					<Link className="nav-link rounded py-2" to= "/">Início</Link>
				
					<Link className="nav-link rounded py-2" to= "/Servicos">Serviços</Link>
				
					<Link className="nav-link rounded py-2" to= "/Cachorros">Cachorros</Link>

					<Link className="nav-link rounded py-2" to= "/Gatos">Gatos</Link>

					<Link className="nav-link rounded py-2" to= "/Cavalos">Cavalos</Link>

					<Link className="nav-link rounded py-2" to= "/Roedores">Roedores</Link>

					<Link className="nav-link rounded py-2" to= "/Passaros">Pássaros</Link>
				
					<Link className="nav-link rounded py-2" to= "/Peixes">Peixes</Link>

					<Link className="nav-link rounded py-2" to= "/Exoticos">Animais Exóticos</Link>
				</div>
			</nav>
	
		);
	}
}

export default Navibar;
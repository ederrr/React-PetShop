import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Login extends Component{
	render(){

		return(
				<div className="login-area col-lg-2 text-center my-auto" >
					<Link to="/Usuario"><span className="fa fa-user"></span>Usuário</Link> /
					<a href="#logout">Sair</a>
					<div>
						<Link to="/Carrinho"><span className="fa fa-shopping-cart"></span>Carrinho</Link>
						<a href="#agendar"><span className="fa fa-calendar"></span></a>
					</div>
				</div>

		);
	}
}

export default Login;
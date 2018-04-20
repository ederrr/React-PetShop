import React, {Component} from 'react';


class Login extends Component{
	render(){

		return(
				<div className="login-area col-lg-2 m-auto " >
					<a href="usuario.html"><span className="fa fa-user"></span>Usuário</a> /
					<a href="#logout">Sair</a>
					<div>
						<a href="carrinho.html"><span className="fa fa-shopping-cart"></span>Carrinho</a>
						<a href="#agendar"><span className="fa fa-calendar"></span></a>
					</div>
				</div>

		);
	}
}

export default Login;
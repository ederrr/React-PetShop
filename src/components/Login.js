import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {login} from '../service/acesso.api';


class Login extends Component{

	constructor(props){

		super(props)
		this.state = {
			logado: false,
			valueEmail: '',
			valueSenha: '',
			nome: ""
		}
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		if(event.target.name == "email")
			this.setState({valueEmail: event.target.value});
		else if(event.target.name == "senha")
			this.setState({valueSenha: event.target.value});
	}


	handleSubmit(event) {
		event.preventDefault();
		login("usuario", this.state.valueEmail, this.state.valueSenha).then(res => res.data.map( (u)=>{this.setState({ nome: u.nome })} ))

	}

	componentDidUpdate(state){
		//this.setState((prevState, props) => ({especie: props.especie}));
		//buscaCategoria("servico", "").then(res => {  this.setState({servicos: res.data})})

	}
	render(){

		{console.log(this.state)}

		if(this.state.nome !== ""){
			return(
				<div className="login-area col-lg-2 text-center my-auto">
					<Link to="/Usuario"><span className="fa fa-user"></span>Usuário</Link> /
					<a href="/">Sair</a>
					<div>
						<Link to="/Carrinho"><span className="fa fa-shopping-cart"></span>Carrinho</Link>
						<a href="/"><span className="fa fa-calendar"></span></a>
					</div>
				</div>
			);
		}
		else{

			return(

			<form className=" form-group login-area col-lg-2 text-center" onSubmit={this.handleSubmit}>
				<label className="col col-md-12 small my-0">Email:</label>
				<input className="my-0 border border-success rounded small" type="email" name="email" onChange={this.handleChange} />
				<label className="col col-md-12 small my-0">Senha:</label>
				<input className="my-0 border border-success rounded small my-1" type="password" name="senha"  onChange={this.handleChange} />
				<div className="row p-2" >
					<div className="col-lg-6 small "> <input className="btn-success rounded text-center " type="submit" value="Entrar"/></div>
					<Link className="col-lg-6 small " to= {"/CadastroUsuario"}><label className="small text-success my-0">Registrar</label></Link>
				</div>
			</form>

			);
		}


	}
}

export default Login;
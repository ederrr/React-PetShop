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
			nome: "",
			mensagem:""
		}
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		if(event.target.name === "email")
			this.setState({valueEmail: event.target.value});
		else if(event.target.name === "senha")
			this.setState({valueSenha: event.target.value});
	}
	handleClick(event){
		if(event.target.name === "sair")
			this.setState({logado: false});

	}


	handleSubmit(event) {
		event.preventDefault();
		login("usuario", this.state.valueEmail, this.state.valueSenha).then( res => { 
			if (res.data.length === 0) {
				this.setState({mensagem: "Email ou Senha Inválidos"})
			}
			else{
				res.data.map( (u)=>{return this.setState({ logado: true})} )

			} 
		})

	}

	componentDidUpdate(state){
		//this.setState((prevState, props) => ({especie: props.especie}));
		//buscaCategoria("servico", "").then(res => {  this.setState({servicos: res.data})})

	}
	render(){

		if(this.state.logado === true){
			return(
				<div className="login-area col-lg-2 text-center my-auto">
					<Link to="/Usuario"><span className="fa fa-user"></span>Usuário</Link> /
					<Link to={"/"} onClick={this.handleClick} name="sair">Sair</Link>
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
				<div className="row pt-2" >
					<div className="col-lg-6 small "> <input className="btn-success rounded text-center " type="submit" value="Entrar"/></div>
					<Link className="col-lg-6 small " to= {"/CadastroUsuario"}><label className="small text-success my-0">Registrar</label></Link>
					<small className="small row p-0 my-0 text-center mx-auto">{this.state.mensagem}</small>
				</div>
			</form>

			);
		}


	}
}

export default Login;
import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {login} from '../service/acesso.api';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as loginActions from './actions/Login';



class Login extends Component{

	constructor(props){

		super(props)
		this.state = {
			logado: false,
			valueEmail: '',
			valueSenha: '',
			nome: "",
			mensagem:"",
			id: 0,
			admin: false
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
			this.setState({logado: false, id: 0, admin: false});
			this.props.fazLogin( false, 0, false);

	}


	handleSubmit(event) {
		var users = []
		event.preventDefault();
		login("usuario", this.state.valueEmail, this.state.valueSenha).then( res => {
			if (res.total_rows == 0) {
				this.setState({mensagem: "Nenhum usuário cadastrado."})
			}
			else{
				res.rows.map((u) => {if(u.doc.email == this.state.valueEmail && u.doc.senha == this.state.valueSenha ){users = [...users, u.doc]}})
				if(users.length != [].length){
					users.map( (u)=>{return ( this.props.fazLogin( true, u._id, u.admin))})
					users.map( (u)=>{return ( this.setState({ logado: true, id: u._id, admin: u.admin}))} )
				}
				else{
					this.setState({mensagem: "Usuario ou Senha Inválidos."})
				}
			}
		})

	}

	render(){
		if(this.state.logado === true){
			return(
				<div className="login-area col-lg-2 text-center my-auto">
					<Link to="/Usuario"><span className="fa fa-user"></span>Usuário</Link> /
					<Link to="" onClick={this.handleClick} name="sair">Sair</Link>
					<div>
						<Link to="/Carrinho"><span className="fa fa-shopping-cart"></span>Carrinho</Link>
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

const mapDispatchToProps = dispatch => bindActionCreators(loginActions, dispatch);

export default connect(null, mapDispatchToProps)(Login);

import React, {Component} from 'react';
import {buscaID} from '../service/acesso.api.js';

class InfoUsuario extends Component{

	constructor(props){
		super(props)
		this.state = {
			usuario:{
			"id": 2,
			"admin": false,
			"nome": "Usuario 2",
			"email": "2@1.com",
			"senha": "1234",
			"sexo": "M",
			"cpf": 13121231232,
			"data": "17/08/1991",
			"foto": "user.png",
			"telefone": 33131112,
			"pets": [7, 9, 11, 12, 13, 18, 19],
			"comprasprodutos": [],
			"comprasservicos": [5],
			"endereco": "R: Arlindo Nem Sei",
			"numero": 133,
			"cep": 13552111,
			"complemento": "apto 215",
			"bairro": "Vila Nery",
			"cidade": "Saint Charles do Pinhal",
			"estado": "São Paulo",
			"referencia": "Virando logo alí."
		}
		}
	}

	componentDidMount(){
		buscaID("usuario", this.props.id).then((res) => {this.setState({usuario: res.data[0]})});
	}


	render(){
		return(
			<div className=" row w-100 mx-auto">
				<p className="h4">Minhas Informações:</p>
				<div className=" row w-100 info border rounded mx-auto py-3">
					<div className="col col-lg-3 col-12 foto">
						<img className="img-fluid w-100 my-2" src={require(`../assets/fotos/${this.state.usuario.foto}`)} alt="foto do usuario"/>
					</div>
					<div className="col col-lg-4 col-12 mt-5 descricao">
						<p className="text h5 my-0" >Nome: <small >{this.state.usuario.nome}</small></p>
						<p className="text h5 my-0" >Email: <small >{this.state.usuario.email}</small></p>
						<p className="text h5 my-0" >CPF: <small >{this.state.usuario.cpf}</small></p>
						<p className="text h5 my-0" >Data de Nacimento: <small >25/04/1992</small></p>
						<p className="text h5 my-0" >Sexo: <small >{this.state.usuario.sexo}</small></p>
						<p className="text h5 my-0" >Telefone: <small >{this.state.usuario.telefone}</small></p>

					</div>
					<div className="col col-lg-4 col-12 mt-5 endereco">
						<p className="text h5 my-0" >Rua: <small>{this.state.usuario.endereco}</small></p>
						<p className="text h5 my-0" >Número: <small>{this.state.usuario.numero}</small></p>
						<p className="text h5 my-0" >Bairro: <small>{this.state.usuario.bairro}</small></p>
						<p className="text h5 my-0" >Cidade: <small>{this.state.usuario.cidade}</small></p>
						<p className="text h5 my-0" >Estado: <small>{this.state.usuario.estado}</small></p>

					</div>
					<span className="fa fa-edit text-primary col col-offset-12" ></span>
				</div>

			</div>
		);
	}
}

export default InfoUsuario;
import React, {Component} from 'react';
import {criaUsuario} from '../service/acesso.api.js';

class CadastroUsuario extends Component{

	constructor(props){

		super(props)
		this.state = {
			id:Math.random(),
			nome: '',
			admin: false,
			email: '',
			senha: '',
			confirmarSenha: '',
			sexo: 'M',
			cpf: '',
			nascimento: '',
			foto: '',
			telefone: '',
			endereco: '',
			numero: '',
			complemento: '',
			bairro: '',
			cidade: '',
			estado: '',
			referencia: '',
		}
		this.handleChange = this.handleChange.bind(this);
		this.handleClick = this.handleClick.bind(this);
	}

	handleChange(event) {
		if(event.target.name === "nome")
			this.setState({nome: event.target.value});
		else if(event.target.name === "email")
			this.setState({email: event.target.value});
		else if(event.target.name === "senha")
			this.setState({senha: event.target.value});
		else if(event.target.name === "confirmarSenha")
			this.setState({confirmarSenha: event.target.value});
		else if(event.target.name === "cpf")
			this.setState({cpf: event.target.value});
		else if(event.target.name === "sexo")
			this.setState({sexo: event.target.value});
		else if(event.target.name === "data")
			this.setState({nascimento: event.target.value});
		else if(event.target.name === "foto")
			this.setState({foto: event.target.value.replace("C:\\fakepath\\","")});
		else if(event.target.name === "telefone")
			this.setState({telefone: event.target.value});
		else if(event.target.name === "endereco")
			this.setState({endereco: event.target.value});
		else if(event.target.name === "numero")
			this.setState({numero: event.target.value});
		else if(event.target.name === "complemento")
			this.setState({complemento: event.target.value});
		else if(event.target.name === "bairro")
			this.setState({bairro: event.target.value});
		else if(event.target.name === "cidade")
			this.setState({cidade: event.target.value});
		else if(event.target.name === "estado")
			this.setState({estado: event.target.value});
		else if(event.target.name === "referencia")
			this.setState({referencia: event.target.value});
		
	}
	handleClick(e){
		e.preventDefault();
		criaUsuario(this.state);
	}

	render(){
		return(
		<div className="my-4 mx-auto w-100">
		<p className="h4">Cadastro de Usuário:</p>
		<form className=" row w-100 mx-auto p-2">
		<div className="col col-lg-5 col-sm-12 w-100 bg-light mx-lg-auto py-3 my-2">
			<div className=" w-100 mx-auto my-4 text-center">
				<p className="h5">Dados do Usuário</p>
			</div>
			<label className="col h6 ">Nome:</label>
				<input type="text" className=" input w-100" name="nome" value={this.state.nome} onChange={this.handleChange} />
			<label className="col h6 ">Email:</label>
				<input type="email" className=" input w-100" name="email" value={this.state.email} onChange={this.handleChange} />
			<label className="col h6 ">Senha:</label>
				<input type="password" className=" input w-100" name="senha" value={this.state.senha} onChange={this.handleChange} />
			<label className="col h6 ">Confirmar Senha:</label>
				<input type="password" className=" input w-100" name="confirmarSenha" value={this.state.confirmarSenha} onChange={this.handleChange} />
			<label className="col h6 ">Sexo:</label>
				<select className="col col-lg-5" name="sexo" onChange={this.handleChange} >
					<option selected value="M">Masculino</option>
					<option value="F">Feminino</option>
					<option value="O">Outro</option>
				</select>
			<label className="col h6 ">CPF:</label>
				<input type="number" className=" input w-100" name="cpf" value={this.state.cpf} onChange={this.handleChange} />
			<label className="col h6 ">Data de Nascimento:</label>
				<input type="date" className=" input w-100 col col-lg-7" name="data" value={this.state.nascimento} onChange={this.handleChange} />
			<label className="col h6 ">Foto:</label>
				<input type="file" className=" input w-100" name="foto" value={this.state.imagem} onChange={this.handleChange}  accept="image/*"/>
			<label className="col h6 ">Telefone:</label>
				<input type="tel" className=" input w-100" name="telefone" value={this.state.telefone} onChange={this.handleChange} />
		</div>

		<div className="col col-lg-5 col-sm-12 w-100 bg-light mx-lg-auto py-3 my-2">
			<div className=" w-100 mx-auto my-4 text-center">
				<p className="h5">Endereço do Usuário</p>
			</div>
			<label className="col h6 ">Endereço:</label>
				<input type="text" className=" input w-100" name="endereco" value={this.state.endereco} onChange={this.handleChange}/>
			<label className="col h6 ">Número:</label>
				<input type="number" className=" input w-100" name="numero" value={this.state.numero} onChange={this.handleChange}/>
			<label className="col h6 ">CEP:</label>
				<input type="number" className=" input w-100" name="cep" value={this.state.valueCEP} onChange={this.handleChange}/>
			<label className="col h6 ">Complemento:</label>
				<input type="text" className=" input w-100" name="complemento" value={this.state.complemento} onChange={this.handleChange}/>
			<label className="col h6 ">Bairro:</label>
				<input type="text" className=" input w-100" name="bairro" value={this.state.bairro} onChange={this.handleChange}/>
			<label className="col h6 ">Cidade:</label>
				<input type="text" className=" input w-100" name="cidade" value={this.state.cidade} onChange={this.handleChange}/>
			<label className="col h6 ">Estado:</label>
				<input type="text" className=" input w-100" name="estado" value={this.state.estado} onChange={this.handleChange}/>
			<label className="col  h6 ">Referência:</label>
			<textarea type="text" className=" input w-100" name="referencia" value={this.state.referencia} onChange={this.handleChange}></textarea>
			
		</div>
		<div className=" w-100 mx-auto text-center my-4">
			<input className="btn btn-success " type="submit" onClick={this.handleClick} value="Cadastrar Usuário" id="envio"/>
		</div>

		</form>
		</div>
		);
	}
}

export default CadastroUsuario;
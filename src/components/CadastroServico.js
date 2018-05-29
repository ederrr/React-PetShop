import React, {Component} from 'react';
import {criaServico} from '../service/acesso.api.js';

class CadastroServico extends Component{

	constructor(props){

		super(props)
		this.state = {
			id: Math.random(),
			nome: '',
			foto: '',
			preco: '',
			descricao: ''

		}
		this.handleChange = this.handleChange.bind(this);
		this.handleClick = this.handleClick.bind(this);
	}

	handleChange(event) {
		if(event.target.name === "nome")
			this.setState({nome: event.target.value});
		else if(event.target.name === "foto")
			this.setState({foto: event.target.value.replace("C:\\fakepath\\","")});
		else if(event.target.name === "preco")
			this.setState({preco: event.target.value});
		else if(event.target.name === "descricao")
			this.setState({descricao: event.target.value});
		
	}
	handleClick(e){
		e.preventDefault();
		criaServico(this.state);
	}

	render(){
		return(
		<div className="my-4 mx-auto w-100">
		<p className="h4">Cadastro de Serviço:</p>
		<form className="mx-auto bg-light p-2">
			<div className=" w-100 mx-auto my-4 text-center">
				<p className="h5">Dados do Serviço</p>
			</div>
			<label className="col h6 ">Nome:</label>
				<input type="text" className=" input w-100" name="nome" value={this.state.nome} onChange={this.handleChange}/>

			<label className="col h6 ">Foto:</label>
				<input type="file" className=" input w-100" name="foto" accept="image/*"  onChange={this.handleChange}/>

			<label className="col h6 ">Preço Base:</label>
				<input type="number" className=" input w-100" name="preco" value={this.state.preco} onChange={this.handleChange}/>

			<label className="col  h6 ">Descrição:</label>
				<textarea type="text" className=" input w-100" name="descricao" value={this.state.descricao} onChange={this.handleChange}></textarea>
				<div className=" w-100 mx-auto text-center my-4">
					<input className="btn btn-success " type="submit" onClick={this.handleClick} value="Cadastrar Serviço" id="envio"/>
				</div>
		</form>
		</div>
		);
	}
}

export default CadastroServico;
import React, {Component} from 'react';
import {criaPet} from '../service/acesso.api.js';


class CadastroProduto extends Component{

	constructor(props){

		super(props)
		this.state = {
		id: Math.random(),
		nome: '',
		foto: '',
		sexo: 'M',
		peso: '',
		tipo: 'Cachorro',
		raca: '',
		pelagem: '',
		rga: '',
		porte: 'medio',
		nascimento: '',
		observacao: ''

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
		else if(event.target.name === "especie")
			this.setState({tipo: event.target.value});
		else if(event.target.name === "raca")
			this.setState({raca: event.target.value});
		else if(event.target.name === "cor")
			this.setState({pelagem: event.target.value});
		else if(event.target.name === "peso")
			this.setState({peso: event.target.value});
		else if(event.target.name === "rga")
			this.setState({rga: event.target.value});
		else if(event.target.name === "porte")
			this.setState({porte: event.target.value});
		else if(event.target.name === "nascimento")
			this.setState({nascimento: event.target.value});
		else if(event.target.name === "observacao")
			this.setState({observacao: event.target.value});
		else if(event.target.name === "sexo")
			this.setState({sexo: event.target.value});

	}
	handleClick(e){
		e.preventDefault();
		criaPet(this.state);
	}

	render(){
		return(
		<div className="my-4 mx-auto w-100">
		<p className="h4">Cadastro de Pet:</p>
		<form className="mx-auto bg-light p-2">
		<fieldset>
			<div className=" w-100 mx-auto my-4 text-center">
				<p className="h5">Dados do Pet</p>
			</div>
			<label className="col h6 ">Nome:</label>
				<input type="text" className=" input w-100" name="nome" placeholder="Ex.: Neguinha" value={this.state.nome} onChange={this.handleChange}/>

			<label className="col h6 ">Foto:</label>
				<input type="file" className=" input w-100" name="foto" onChange={this.handleChange} accept="image/*"/>

			<label className="col h6 ">Sexo:</label>
				<select className="col col-lg-3" name="sexo" value={this.state.sexo} onChange={this.handleChange}>
					<option value="F">Fêmea</option>
					<option value="M">Macho</option>
				</select>

			<label className="col h6 ">Tipo do Animal:</label>
				<select className="col col-lg-3" name="especie" value={this.state.tipo} onChange={this.handleChange} >
					<option value="cachorros">Cachorro</option>
					<option value="cavalos">Cavalo</option>
					<option value="gatos">Gato</option>
					<option value="passaros">Pássaro</option>
					<option value="peixes">Peixe</option>
					<option value="roedores">Roedor</option>
					<option value="exoticos">Outro...</option>
				</select>

			<label className="col h6 ">Raça:</label>
				<input type="text" className=" input w-100" name="raca" placeholder="Ex.: Pinscher" value={this.state.raca} onChange={this.handleChange}/>

			<label className="col h6 ">Pelagem/Cor:</label>
				<input type="text" className=" input w-100" name="cor" placeholder="Ex.: Preto" value={this.state.pelagem} onChange={this.handleChange}/>
			<label className="col h6 ">RGA:</label>
				<input type="number" className=" input w-100" name="rga" placeholder="Ex.: 123321" value={this.state.rga} onChange={this.handleChange}/>

			<label className="col h6 ">Porte:</label>
				<select className="col col-lg-3" name="porte" value={this.state.porte} onChange={this.handleChange} >
					<option value="pequeno">Pequeno</option>
					<option value="medio">Médio</option>
					<option value="grande">Grande</option>
				</select>
			<label className="col h6 ">Data de Nascimento:</label>
				<input type="date" className=" input w-100 col col-lg-3" name="nascimento" placeholder="Ex.: 02/03/1992" value={this.state.nascimento} onChange={this.handleChange}/>
			<label className="col h6 ">Peso(Kg):</label>
				<input type="number" className=" input w-100" name="peso" placeholder="Ex.: 2.350" value={this.state.peso} onChange={this.handleChange}/>

			<label className="col  h6 ">Descrição:</label>
				<textarea type="text" className=" input w-100" name="observacao" placeholder="Ex.: Alérgica a cafeína." value={this.state.observacao} onChange={this.handleChange}></textarea>
				<div className=" w-100 mx-auto text-center my-4">
					<input className="btn btn-success " type="submit" onClick={this.handleClick} value="Cadastrar Serviço" id="envio"/>
				</div>
		</fieldset>
		</form>
		</div>
		);
	}
}

export default CadastroProduto;

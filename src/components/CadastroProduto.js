import React, {Component} from 'react';
import {criaProduto} from '../service/acesso.api.js';


class CadastroProduto extends Component{

		constructor(props){

		super(props)
		this.state = {
			id: Math.random(),
			nome: '',
			imagem0:'',
			imagem1:'',
			imagem2:'',
			imagem3:'',
			preco: '',
			categoria: 'cachorros',
			peso: "",
			upeso:"kg",
			marca: '',
			embalagem: '',
			quantidade: '',
			descricao: '',
			altura: "",
			largura: "",
			comprimento:"",
			ualtura: "cm",
			ulargura: "cm",
			ucomprimento:"cm"
		}
		this.handleChange = this.handleChange.bind(this);
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(e){
		e.preventDefault();
		criaProduto(this.state)


	}

	handleChange(event){
		if(event.target.name === "nome")
			this.setState({nome: event.target.value});
		else if(event.target.name === "preco")
			this.setState({preco: event.target.value});
		else if(event.target.name === "imagem0")
			this.setState({imagem0: event.target.value.replace("C:\\fakepath\\","")});
		else if(event.target.name === "imagem1")
			this.setState({imagem1: event.target.value.replace("C:\\fakepath\\","")});
		else if(event.target.name === "imagem2")
			this.setState({imagem2: event.target.value.replace("C:\\fakepath\\","")});
		else if(event.target.name === "imagem3")
			this.setState({imagem3: event.target.value.replace("C:\\fakepath\\","")});
		else if(event.target.name === "categoria")
			this.setState({categoria: event.target.value});
		else if(event.target.name === "marca")
			this.setState({marca: event.target.value});
		else if(event.target.name === "peso")
			this.setState({peso: event.target.value});
		else if(event.target.name === "upeso")
			this.setState({upeso: event.target.value});
		else if(event.target.name === "embalagem")
			this.setState({embalagem: event.target.value});
		else if(event.target.name === "altura")
			this.setState({altura: event.target.value});
		else if(event.target.name === "largura")
			this.setState({largura: event.target.value});
		else if(event.target.name === "comprimento")
			this.setState({comprimento: event.target.value});
		else if(event.target.name === "ualtura")
			this.setState({ualtura: event.target.value});
		else if(event.target.name === "ulargura")
			this.setState({ulargura: event.target.value});
		else if(event.target.name === "ucomprimento")
			this.setState({ucomprimento: event.target.value});
		else if(event.target.name === "quantidade")
			this.setState({quantidade: event.target.value});
		else if(event.target.name === "descricao")
			this.setState({descricao: event.target.value});

	}
	render(){
		return(
		<div className="my-4 mx-auto w-100">
		<p className="h4">Cadastro de Produto:</p>
		<form className="mx-auto bg-light p-2">
		<fieldset>
			<div className=" w-100 mx-auto my-4 text-center">
				<p className="h5">Dados do Produto</p>
			</div>
			<label className="col h6 ">Nome:</label>
				<input type="text" className=" input w-100" name="nome" placeholder="Ex.: Ração" value={this.state.nome}  onChange={this.handleChange} />

			<label className="col h6 ">Preço:</label>
				<input type="text" className=" input w-100" name="preco" placeholder="Ex.: 15.50" value={this.state.preco}  onChange={this.handleChange} />

			<label className="col h6 ">Fotos do Produto:</label>
				<input type="file" className=" input w-100" name="imagem0" value={this.state.imagem} onChange={this.handleChange}  accept="image/*"/>
				<input type="file" className=" input w-100" name="imagem1" value={this.state.imagem} onChange={this.handleChange}  accept="image/*"/>
				<input type="file" className=" input w-100" name="imagem2" value={this.state.imagem} onChange={this.handleChange}  accept="image/*"/>
				<input type="file" className=" input w-100" name="imagem3" value={this.state.imagem} onChange={this.handleChange}  accept="image/*"/>
			<label className="col h6 ">Categoria:</label>
				<select className="col col-lg-2" name="categoria" value={this.state.categoria} onChange={this.handleChange}>
				  <option value="cachorros">cachorros</option>
				  <option value="gatos">gatos</option>
				  <option value="peixes">peixes</option>
				  <option value="passaros">passaros</option>
				  <option value="cavalos">cavalos</option>
				  <option value="roedores">roedores</option>
				  <option value="exoticos">exoticos</option>
				</select>

			<label className="col h6 ">Marca:</label>
				<input type="text" className=" input w-100" name="marca" placeholder="Ex.: Pedgree" value={this.state.marca} onChange={this.handleChange}  />

			<label className="col h6 ">Peso Líquido:</label>
				<input type="text" className=" input col col-lg-2 mx-lg-2" name="peso" placeholder="Ex.: 10.0" value={this.state.peso}  onChange={this.handleChange} />
				<select className="col col-lg-1" name="upeso" value={this.state.upeso} onChange={this.handleChange}>
				  <option value="ml">ml</option>
				  <option value="l">l</option>
				  <option value="g">g</option>
				  <option value="kg">kg</option>
				</select>
			<label className="col  h6 ">Tipo de Embalagem:</label>
				<input type="text" className=" input w-100" name="embalagem" placeholder="Ex.: Saco" value={this.state.embalagem} onChange={this.handleChange}  />

			<label className="col  h6 ">Dimensões (Altura x Largura x Comprimento):</label>
				<input type="number" className=" input col col-lg-2 mx-lg-2" name="altura" placeholder="Ex.: 2.5" value={this.state.altura} onChange={this.handleChange}  />
				<select className="col col-lg-1" name="ualtura" value={this.state.ualtura}  onChange={this.handleChange}>
				  <option value="mm">mm</option>
				  <option value="cm">cm</option>
				  <option value="m">m</option>
				</select>
				<p className="col col-lg-1">x</p>
				<input type="number" className=" input col col-lg-2 mx-lg-2" name="largura" placeholder="Ex.: 1.0" value={this.state.largura}  onChange={this.handleChange} />
				<select className="col col-lg-1" name="ulargura" value={this.state.ulargura} onChange={this.handleChange}>
				  <option value="mm">mm</option>
				  <option value="cm">cm</option>
				  <option value="m">m</option>
				</select>
				<p className="col col-lg-1">x</p>
				<input type="number" className=" input col col-lg-2 mx-lg-2" name="comprimento" placeholder="Ex.: 0.3" value={this.state.comprimento} onChange={this.handleChange}  />
				<select className="col col-lg-1" name="ucomprimento" value={this.state.ucomprimento} onChange={this.handleChange} >
				  <option value="mm">mm</option>
				  <option value="cm">cm</option>
				  <option value="m">m</option>
				</select>

			<label className="col  h6 ">Quantidade:</label>
				<input type="number" className=" input w-100" name="quantidade" placeholder="Ex.: 15" value={this.state.quantidade} onChange={this.handleChange} />

			<label className="col  h6 ">Descrição:</label>
				<textarea type="text" className=" input w-100" name="descricao" placeholder="Ex.: Saco de 10kg de ração Pedigree rica em vitamina A, B e Cálcio." value={this.state.descricao} onChange={this.handleChange} ></textarea>
				<div className=" w-100 mx-auto text-center my-4">
					<input className="btn btn-success " type="submit" onClick={this.handleClick} value="Cadastrar Produto" id="envio"/>
				</div>
		</fieldset>
		</form>
		</div>
		);
	}
}

export default CadastroProduto;

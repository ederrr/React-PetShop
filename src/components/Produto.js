import React,{Component} from 'react';
import {buscaID} from '../service/acesso.api'
import {Miniatura } from './Miniatura.js'

class Produto extends Component{

	

	constructor(props){

		super(props)

		this.state = {
			id : this.props.match.params.id,
			nome: "",
			preco: 1,
			descricao: "",
			imagem: "bird.jpg",
			categoria: ""

		}

		this.handleClick = this.handleClick.bind(this);

	} 


	componentDidMount(props){

		buscaID(this.props.repos, this.state.id).then(res => this.setState({nome: res.data[0].nome, preco: res.data[0].preco, descricao: res.data[0].descricao,imagem: res.data[0].imagem,categoria: res.data[0].categoria}))
	}

	handleClick(props, e){
		this.setState({imagem: props.imagem})

	}

	render(){

		return(

			<div>
				<div className = "row py-3">

					<div className ="col col-lg-6 col-12 ">

							<img className= "img-fluid rounded w-100 " src={require(`../assets/fotos/${this.state.imagem}`)} alt="foto do produto" />
							<div className="row">
								<Miniatura imagem={"cat.jpg"} onClick={this.handleClick}/>
								<Miniatura imagem={"dog.jpg"} onClick={this.handleClick}/>
								<Miniatura imagem={"horse.jpg"} onClick={this.handleClick}/>
								<Miniatura imagem={"bird.jpg"} onClick={this.handleClick}/>
							</div>
					</div>

					<div className ="col col-lg-6 col-12 px-auto py-3 rounded border text-center h-lg-100">
						<p className="h1 text-center">{this.state.nome}</p>
						<p className="h4 text-secondary my-lg-5">{`R$ ${this.state.preco}`}</p>

						<button className="btn btn-success w-50 my-lg-5">COMPRAR</button>

						
						<p className="h5">Calcular Frete:</p>
						<div className="input-group row mx-auto"><input className="input offset-lg-2 col-lg-5 rounded" type="text"></input><button className="btn col-lg-3 ">Calcular</button></div>
						<p className="h5 pt-5">Prazo de Entrega:</p>
						<p className="h5 text-secondary">Dia de São Nunca</p>
						<p className="h5">Valor do Frete:</p>
						<p className="h5 text-secondary">R$2,99</p>

						

					</div>

				</div>
				<div className="row rounded border p-3 my-3">
					<p className="h5">Descricao:</p>
					<p >{this.state.descricao}</p>
				</div>
				<div className="row rounded border p-3">
				<p className="h5">Informações:</p>

				</div>

			</div>
		);
	}

}

export default Produto;

import React,{Component} from 'react';
import {buscaID} from '../service/acesso.api'
import {Miniatura } from './Miniatura.js'
import CalculoFrete from './CalculoFrete.js'
import TabelaDescricao from './TabelaDescricao.js'
import {Link} from 'react-router-dom';


class Produto extends Component{

	

	constructor(props){

		super(props)

		this.state = {
			id : this.props.match.params.id,
			nome: "",
			preco: 0,
			descricao: "",
			imagem: ["bird.jpg","bird.jpg","bird.jpg","bird.jpg"],
			categoria: "",
			informacoes: [{nome: "Marca", descricao: "Mad Max"},{nome: "Peso", descricao: "Mad Max"},{nome: "Descricao", descricao: "Mad Max"}]

		}

		this.handleClick = this.handleClick.bind(this);

	} 


	componentDidMount(props){

		buscaID(this.props.repos, this.state.id).then(res => this.setState({nome: res.data[0].nome, preco: res.data[0].preco, descricao: res.data[0].descricao,/*imagem: res.data[0].imagem*/categoria: res.data[0].categoria}))
	}

	handleClick(props, e){
		this.setState({imagem: props.imagem})

	}

	render(){

		return(

			<div>
				<div className = "row py-3">

					<div className ="col col-lg-6 col-12 ">

							<img className= "img-fluid rounded w-100 " src={require(`../assets/fotos/${this.state.imagem[0]}`)} alt="foto do produto" />
							<div className="row">
								<Miniatura imagem={this.state.imagem[0]} onClick={this.handleClick}/>
								<Miniatura imagem={this.state.imagem[1]} onClick={this.handleClick}/>
								<Miniatura imagem={this.state.imagem[2]} onClick={this.handleClick}/>
								<Miniatura imagem={this.state.imagem[3]} onClick={this.handleClick}/>
							</div>
					</div>

					<div className ="col col-lg-6 col-12 px-auto py-3 rounded border text-center h-lg-100">
						<p className="h1 text-center">{this.state.nome}</p>
						<p className="h4 text-secondary my-lg-5">{`R$ ${this.state.preco}`}</p>

						<Link to={`/Carrinho${this.state.id}`} className="btn btn-success text-center w-50 my-lg-5">COMPRAR</Link>

						
						<CalculoFrete produto = {this.state}/>


					</div>

				</div>
				<div className="row rounded border p-3 my-3">
					<p className="h5">Descricao:</p>
					<p >{this.state.descricao}</p>
				</div>

				<div className="row rounded border p-3">
				<p className="h5">Informações:</p>

					<TabelaDescricao />
		
				</div>

			</div>
		);
	}

}

export default Produto;

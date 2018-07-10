import {Link} from 'react-router-dom';
import React, {Component} from 'react';
import {buscaNome} from '../service/acesso.api'
import ListProduto from './ListProduto';
var temp = []

class Especie extends Component{

		constructor(props){

		super(props)

		this.state = {
			raw:[],
			produtos:[],
			nome: this.props.match.params.nome
		}

	}

	componentWillReceiveProps(props){
		var raw = []
		this.setState({nome: props.match.params.nome})
		buscaNome(this.props.repos, props.match.params.nome).then(

			res => {raw = res;
				raw.rows.map((produto) => {if(produto.doc.nome == this.state.nome)temp = [...temp,produto]});
				this.setState({produtos: temp});
			}
		)
	}

	componentDidMount(props){
		var raw = []
		buscaNome(this.props.repos, this.state.nome).then(

			res => {raw = res;
				raw.rows.map((produto) => {if(produto.doc.nome == this.state.nome)temp = [...temp,produto]});
				this.setState({produtos: temp});
			}
		)
	}

	render(){

		{console.log(this.state.produtos);}
		return(
			<div>

				<p className="h4" >Produtos para {this.state.nome}:</p>


				<div className="row">
					{this.state.produtos.map( (produto) => { return(
						<Link key={produto.id} className="col col-lg-3 col-sm-6 my-1" to= {`/Produto${produto.doc._id}`} >
							<div className="shadow rounded text-center produto" >
								<img className= "img-fluid p-3 " src={require(`../assets/fotos/${produto.doc.imagem[0]}`)} alt="foto do produto" />
								<div className="container pb-2">
									<p className=" text-center text font-weight-bold text-secondary product mt-2 mb-0">{produto.doc.nome}</p>
									<p className=" text-center text text-secondary price" >{produto.doc.preco}</p>
								</div>
							</div>
						</Link>)})}
				</div>

			</div>
		);
	}
}


export default Especie;

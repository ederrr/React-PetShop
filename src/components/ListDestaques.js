import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {buscaCategoria} from '../service/acesso.api'

class ListDestaques extends Component{

	constructor(props){

		super(props)

		this.state = {
			produtos:[],
			especie: props.especie
		}

	}

	componentDidMount(props){
		this.setState((prevState, props) => ({especie: props.especie}));
		buscaCategoria(this.props.repos, this.props.especie).then(res => this.setState({produtos:res.rows}))

	}

	render(){
		
		return(

			<div className="div mb-3" >

				<p className="h4" >Produtos para {this.state.especie}:</p>

				<div className="row">
					{this.state.produtos.map( (produto,i) => {if (produto.doc.categoria === this.state.especie) { return(
						<Link className="col col-lg-3 col-sm-6 my-1" to= {`/Produto${produto.doc._id}`} >
							<div className=" shadow rounded text-center produto" >
								<img className= "img-fluid p-3" src={require(`../assets/fotos/${produto.doc.imagem[0]}`)} alt="foto do produto" />
								<div className="container pb-2">
									<p className=" text-center text font-weight-bold text-secondary product mt-2 mb-0">{produto.doc.nome}</p>
									<p className=" text-center text text-secondary price" >{produto.doc.preco}</p>
								</div>
							</div>
						</Link>)}else{return(<div></div>)} })}
				</div>

			</div>


		);

	}
}


export default ListDestaques;

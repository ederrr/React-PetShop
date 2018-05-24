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
		buscaCategoria(this.props.repos, this.props.especie).then(res => {  this.setState({produtos: res.data})})

	}

	render(){
		

		return(

			<div className="div mb-3" >

				<p className="h4" >Produtos para {this.state.especie}:</p>
				
				<div className="row">
					{this.state.produtos.map( (produto,i) => { if (i<4) { return( 
						<Link key={produto.id} className="col col-lg-3 col-sm-6 my-1" to= {`/Produto${produto.id}`} >
							<div className=" shadow rounded text-center produto" >
								<img className= "img-fluid p-3" src={require(`../assets/fotos/${produto.imagem}`)} alt="foto do produto" />
								<div className="container pb-2">
									<p className=" text-center text font-weight-bold text-secondary product mt-2 mb-0">{produto.nome}</p>
									<p className=" text-center text text-secondary price" >{produto.preco}</p>
								</div>
							</div>
						</Link>)}})}
				</div>
				
			</div>


		);

	}
}


export default ListDestaques;
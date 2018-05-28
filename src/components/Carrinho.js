import React, {Component} from 'react';
import {buscaID} from '../service/acesso.api'
import ItemCarrinho from './ItemCarrinho';
import {Link} from 'react-router-dom';


let carrinhoId = [];

class Especie extends Component{

	constructor(props){

		super(props)

		this.state = {
			id: [],
			produtos: []
		};

	}

	componentDidMount(props){

		if(this.props.match.params.id !== undefined){
		carrinhoId = [ ...carrinhoId , this.props.match.params.id];
		//{console.log(this.state.id)}
		}else{
		carrinhoId = [...carrinhoId]
		}
		carrinhoId.map((id) => buscaID("produto", id).then(res => this.setState({produtos: this.state.produtos.concat(res.data)})));
	}


	render(){

		return(
				<div className= "row w-100 mx-auto">
				<p className="h4" >Carrinho:</p>
					{this.state.produtos.map( (produto) => (
						<ItemCarrinho key={produto.id} produto={produto} />
					))}
					<Link to={""} className="btn btn-success text-center w-25 mx-auto my-lg-3" > Fechar Carrinho </Link>
				</div>
		);
	}
}


export default Especie;
import React, {Component} from 'react';
import {buscaID} from '../service/acesso.api'
import ItemCarrinho from './ItemCarrinho';
import {Link} from 'react-router-dom';


class Especie extends Component{

		constructor(props){

		super(props)

		this.state = {
			id: [],
			produtos: []
		};

	}

	componentDidMount(props){

		this.state.id = [...this.state.id, this.props.match.params.id];
		//{console.log(this.state.id)}
		this.state.id.map((id) => buscaID("produto", id).then(res => this.setState({produtos: this.state.produtos.concat(res.data)})));

	}


	render(){

		return(
				<div className= "row w-100 mx-auto">
				<p className="h4" >Carrinho:</p>
					{this.state.produtos.map( (produto) => (
						<ItemCarrinho key={produto.id} produto={produto} />
					))}
					<Link to={"/"} className="btn btn-success text-center w-25 mx-auto my-lg-3" > Fechar Carrinho </Link>
				</div>
		);
	}
}


export default Especie;
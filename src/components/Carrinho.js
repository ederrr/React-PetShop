import React, {Component} from 'react';
import {buscaID} from '../service/acesso.api'
import {compraProduto} from '../service/acesso.api'
import {addCompra} from '../service/acesso.api'
import ItemCarrinho from './ItemCarrinho';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';


let carrinhoId = [];

class Carrinho extends Component{

	constructor(props){

		super(props)

		this.state = {
			id: [],
			produtos: []
		};

	}

	fechaCompra(p, idCompra){
		compraProduto({id: idCompra, nome: p.nome, comprador: this.props.id ,quantidade: 1,valor: p.preco})
		
		addCompra(this.props.id, idCompra)

	}

	fecharCarrinho(){
		this.state.produtos.map((p) => this.fechaCompra(p, Math.random()))
	}

	componentDidMount(props){

		if(this.props.match.params.id !== undefined){
		carrinhoId = [ ...carrinhoId , this.props.match.params.id];
		}else{
		carrinhoId = [...carrinhoId]
		}
		carrinhoId.map((id) => buscaID("produto", id).then(res => this.setState({produtos: this.state.produtos.concat(res.data)})));
	}

	render(){

		if(this.props.logado){

			return(
					<div className= "row w-100 mx-auto">
					<p className="h4" >Carrinho:</p>
						{this.state.produtos.map( (produto) => (
							<ItemCarrinho carrinho={carrinhoId} key={produto.id} produto={produto} />
						))}
						<Link to={"/"} onClick={() => this.fecharCarrinho()} className="btn btn-success text-center w-25 mx-auto my-lg-3" > Fechar Carrinho </Link>
					</div>
			);
	
		}
		else{
			return(<p>Cadastre-se ou realize login para acessar.</p>);
		}
	}
}


const mapStateToProps = state => ({
	id: state.id,
	logado: state.logado
	
});

export default connect(mapStateToProps)(Carrinho);
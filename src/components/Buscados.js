import React, {Component} from 'react';
import {buscaNome} from '../service/acesso.api'
import ListProduto from './ListProduto';


class Especie extends Component{

		constructor(props){

		super(props)

		this.state = {
			produtos:[],
			nome: this.props.match.params.nome
		} 

	}

	componentWillReceiveProps(props){
		this.setState({nome: props.match.params.nome})
		buscaNome(this.props.repos, props.match.params.nome).then(res => this.setState({produtos: res.data}))

	}

	componentDidMount(props){

		buscaNome(this.props.repos, this.state.nome).then(res => this.setState({produtos: res.data}))
	}

	render(){

		return(
				<div>
				<ListProduto produtos={this.state.produtos} especie={this.state.nome} />
				</div>
		);
	}
}


export default Especie;
import React, {Component} from 'react';
import {buscaCategoria} from '../service/acesso.api'

import ListProduto from './ListProduto';


class Especie extends Component{

		constructor(props){

		super(props)

		this.state = {
			produtos:[],
			especie: props.especie
		} 

	}

	componentWillReceiveProps(props){
		this.setState((prevState, props) => ({especie: props.especie}));
		buscaCategoria(props.repos, props.especie).then(res => this.setState({produtos: res.data}))
	}

	componentDidMount(props){
		this.setState((prevState, props) => ({especie: props.especie}));
		buscaCategoria(this.props.repos, this.props.especie).then(res => this.setState({produtos: res.data}))

	}

	render(){

		return(
				<div>
				<ListProduto produtos={this.state.produtos} especie={this.state.especie}/>
				</div>
		);
	}
}


export default Especie;
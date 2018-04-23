import React, {Component} from 'react';
import PaginaInicio from './PaginaInicio';
import Especie from './Especie';
import Servicos from './Servicos';
import Produto from './Produto'
import {Switch, Route} from 'react-router-dom'


class Conteudo extends Component{

	render(){
		return(
			<div className="row rounded shadow mx-0 mt-1 px-4 pb-4">
			<Switch>
				<Route exact path='/' component = {PaginaInicio} />
				<Route path='/Gatos' render = {(props) => <Especie {...props} especie="gatos" repos= "produto"/>}  /> 
				<Route path='/Cachorros' render = {(props) => <Especie {...props} especie="cachorros" repos= "produto"/>} />
				<Route path='/Servicos' component = {Servicos}/>
				<Route path='/Produto:id' component = {Produto} />

			</Switch>
			</div>
		);
	}
}

export default Conteudo;
import React, {Component} from 'react';
import PaginaInicio from './PaginaInicio';
import Especie from './Especie';
import Servicos from './Servicos';
import Produto from './Produto';
import Buscados from './Buscados';
import Carrinho from './Carrinho';
import Usuario from './Usuario';
import Pet from './Pet';
import CadastroProduto from './CadastroProduto';
import CadastroPet from './CadastroPet';
import CadastroServico from './CadastroServico';
import CadastroUsuario from './CadastroUsuario';
import AgendarServico from './AgendarServico';
import {Switch, Route} from 'react-router-dom';


class Conteudo extends Component{

	render(){
		return(
			<div className="row rounded shadow mx-0 mt-1 px-4 pb-4">
			<Switch>
				<Route exact path='/' component = {PaginaInicio} />
				<Route path='/Gatos' render = {(props) => <Especie {...props} especie="gatos" repos= "produto"/>}  /> 
				<Route path='/Cachorros' render = {(props) => <Especie {...props} especie="cachorros" repos= "produto"/>} />
				<Route path='/Cavalos' render = {(props) => <Especie {...props} especie="cavalos" repos= "produto"/>}  /> 
				<Route path='/Passaros' render = {(props) => <Especie {...props} especie="passaros" repos= "produto"/>} />
				<Route path='/Roedores' render = {(props) => <Especie {...props} especie="roedores" repos= "produto"/>}  /> 
				<Route path='/Peixes' render = {(props) => <Especie {...props} especie="peixes" repos= "produto"/>} />
				<Route path='/Exoticos' render = {(props) => <Especie {...props} especie="exoticos" repos= "produto"/>} />
				<Route path='/Servicos' component = {Servicos}/>
				<Route exact path='/Carrinho' component = {Carrinho}/>
				<Route path='/Carrinho:id' render = {(props) => <Carrinho {...props}/>} />
				<Route path='/Servicos' component = {Servicos}/>
				<Route exact path='/Usuario' component = {Usuario}/>
				<Route exact path='/CadastroProduto' component = {CadastroProduto}/>
				<Route exact path='/CadastroPet' component = {CadastroPet}/>
				<Route exact path='/CadastroServico' component = {CadastroServico}/>
				<Route exact path='/CadastroUsuario' component = {CadastroUsuario}/>
				<Route path='/AgendarServico:id' render = {(props) => <AgendarServico {...props} />}/>
				<Route exact path='/Pet' component = {Pet}/>
				<Route exact path='/Usuario:id'  render = {(props) => <Usuario {...props} />} />
				<Route path='/Produto:id' render = {(props) => <Produto {...props} repos= "produto"/>} />
				<Route path='/Buscados:nome' render = {(props) => <Buscados {...props} repos= "produto"/>} />

			</Switch>
			</div>
		);
	}
}

export default Conteudo;
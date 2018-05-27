import React, {Component} from 'react';
import {buscaServico} from '../service/acesso.api'
import {Link} from 'react-router-dom';


class Servicos extends Component{

	constructor(props){

		super(props)

		this.state = {
			servicos:[]
		}

	} 


	componentDidMount(props){
		//this.setState((prevState, props) => ({especie: props.especie}));
		buscaServico("servico").then(res => {  this.setState({servicos: res.data})})

	}

	render(){
		return(
			<div>
			<p className="h4">Serviços:</p>
			{this.state.servicos.map( (servico) => 
			<div key= {servico.id} className="row servico rounded border text-center my-3 px-3" >
				
				<div className="row">
					<div className=" col imagem my-auto">
						<img className="img-fluid" src={require(`../assets/fotos/${servico.imagem}`)} alt="imagem do servico"/>
					</div>
					<div className=" col col-lg-7 resumo my-auto">
						<p className="h3 text-center">{servico.nome}</p>
						<p className="text-justify">{servico.descricao}</p>
						<p className="valor">{"*"+servico.preco.descricao}</p>
					</div>
					<Link to={`/AgendarServico${servico.id}`} className = " col my-auto">
						<button className="bt-agendar btn-success" >Agendar</button>
					</Link>
				</div>

			</div >)}
		</div>

		);
	}
}


export default Servicos;
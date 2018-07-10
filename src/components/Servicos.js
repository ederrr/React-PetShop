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
		buscaServico("servico").then(res => {  this.setState({servicos: res.rows})})
		this.setState();

	}

	render(){
		console.log(this.state.servicos)
		return(
			<div>
			<p className="h4">Serviços:</p>
			{this.state.servicos.map( (servico) =>
			<div key= {servico.doc.id} className="row servico rounded border text-center my-3 px-3" >

				<div className="row">
					<div className=" col imagem my-auto">
						<img className="img-fluid" src={require(`../assets/fotos/${servico.doc.imagem}`)} alt="imagem do servico."/>
					</div>
					<div className=" col col-lg-7 resumo my-auto">
						<p className="h3 text-center">{servico.doc.nome}</p>
						<p className="text-justify">{servico.doc.descricao}</p>
						<p className="valor">{"*"+servico.doc.preco.descricao}</p>
					</div>
					<Link to={`/AgendarServico${servico.doc._id}`} className = " col my-auto">
						<button className="bt-agendar btn-success" >Agendar</button>
					</Link>
				</div>

			</div >)}
		</div>

		);
	}
}


export default Servicos;

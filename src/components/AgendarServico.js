import React, {Component} from 'react';
import {buscaID} from '../service/acesso.api'
import ListPetsAgendar from './ListPetsAgendar'



class AgendarServico extends Component{

	constructor(props){

		super(props)

		this.state = {
			id: this.props.match.params.id,
			nome: "",
			descricao: "",
			imagem: "banho.png",
			preco:{
				descricao : "",
				preco : 0
			}
		}

	} 

	componentDidMount(props){
		buscaID("servico", this.state.id ).then(res => {  this.setState({nome: res.data[0].nome, descricao: res.data[0].descricao, imagem: res.data[0].imagem, preco: res.data[0].preco})})
	}

	render(){
		return(
			<div>
				<p className="h4">Serviços:</p>
				<div className="row rounded border mx-auto text-center my-3 px-4 py-3" >
					
					<div className="row">
						<div className=" col col-lg-4 col-12 imagem my-auto">
							<img className="img-fluid" src={require(`../assets/fotos/${this.state.imagem}`)} alt="imagem do servico"/>
						</div>
						<div className=" col col-lg-8 col-sm-12 resumo my-auto">
							<p className="h3 text-center">{this.state.nome}</p>
							<p className="text-justify">{this.state.descricao}</p>
						</div>
					</div>
					<div className="row  rounded border h-100">
						<div className=" col col-lg-7 col-12 imagem my-auto py-2 px-auto w-100">
						<ListPetsAgendar />
						</div>
						<div className="col col-lg-5 col-12 imagem h-100 p-2 ">
						<p className="h6 my-3">Escolha uma data:</p>
							<div className="col w-100 mx-auto px-auto">
								<input type="date" className=" input col col-6 col-lg-6 mx-1" name="data" value=""/>
								<input type="time" className=" input col col-6 col-lg-4 mx-1" name="hora" value=""/>
								<p className="h6 my-3">Valor do Serviço:</p>
								<p>R${this.state.preco.preco}</p>
								<button className="btn btn-success">Agendar</button>
							</div>
						</div>
					</div>
				</div >
			</div>

		);
	}
}


export default AgendarServico;
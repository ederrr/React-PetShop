import React, {Component} from 'react';
import {buscaID} from '../service/acesso.api'
import {compraServico} from '../service/acesso.api.js';
import ListPetsAgendar from './ListPetsAgendar'
import {connect} from 'react-redux';



class AgendarServico extends Component{

	constructor(props){

		super(props)

		this.state = {
			idServico: this.props.match.params.id,
			id:Math.random(),
			nome: "",
			descricao: "",
			imagem: "banho.png",
			pet:1,
			data:"",
			hora:"",
			preco:{
				descricao : "",
				preco : 0
			}
		}
		this.handleChange = this.handleChange.bind(this);
		this.handleClick = this.handleClick.bind(this);

	} 

	handleChange(event) {
		if(event.target.name === "data")
			this.setState({data: event.target.value});
		else if(event.target.name === "hora")
			this.setState({hora: event.target.value});
		
	}
	handleClick(e){
		e.preventDefault();
		compraServico(this.state);
	}

	componentDidMount(props){
		buscaID("servico", this.state.idServico ).then(res => {  this.setState({nome: res.data[0].nome, descricao: res.data[0].descricao, imagem: res.data[0].imagem, preco: res.data[0].preco})})
	}

	render(){
		if(this.props.logado){

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
						<ListPetsAgendar id={this.props.id} />
						</div>
						<div className="col col-lg-5 col-12 imagem h-100 p-2 ">
						<p className="h6 my-3">Escolha uma data:</p>
							<div className="col w-100 mx-auto px-auto">
								<input type="date" className=" input col col-6 col-lg-6 mx-1" name="data" onChange={this.handleChange} value={this.state.data}/>
								<input type="time" className=" input col col-6 col-lg-4 mx-1" name="hora" onChange={this.handleChange} value={this.state.hora}/>
								<p className="h6 my-3">Valor do Serviço:</p>
								<p>R${this.state.preco.preco}</p>
								<button className="btn btn-success" onClick={this.handleClick} >Agendar</button>
							</div>
						</div>
					</div>
				</div >
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

export default connect(mapStateToProps)(AgendarServico);
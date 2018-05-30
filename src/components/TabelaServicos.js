import React, {Component} from 'react';
import {buscaServicoPet} from '../service/acesso.api.js';
import {buscaID} from '../service/acesso.api.js';

class TabelaServicos extends Component{
	constructor(props){

		super(props)

		this.state = {
			servicos:[],
			total: 0
		}
	}
	componentDidMount(){
		if(this.props.tipo==="usuario"){

			buscaID("usuario", this.props.id).then((res) => {buscaID("compraservico", res.data[0].comprasservicos).then((r) => {this.setState({servicos: r.data})})});
		}
		else{
		buscaServicoPet("compraservico", this.props.id).then((res) => this.setState({servicos: res.data}))
		}
	}

	render(){
		return(
			<div className="row w-100 mx-auto">
			<p className="col col-12 h4 my-3">Serviços Realizados:</p>
			<div className="row w-100 mx-auto border">

			<table className="table table-responsive-sm table-hover table-bordered table-striped m-4">
				<thead className="thead-dark">
				<tr>
					<th>Serviços</th>
					<th>Data</th>
					<th>Hora</th>
					<th>Valor</th>
				</tr>
				</thead>
				<tbody>
				{this.state.servicos.map( (servico) => 
				<tr key={Math.random()} >
					<td>{servico.nome}</td>
					<td>{servico.dataservico}</td>
					<td>{servico.horaservico}</td>
					<td>R${servico.valor}</td>
				</tr>
				)}
				<tr>
					<th>Total </th>
					<th></th>
					<th></th>
					<th>R${this.state.total}</th>
				</tr>
				</tbody>
			</table>

			</div>				
			</div>
		);
	}
}

export default TabelaServicos;
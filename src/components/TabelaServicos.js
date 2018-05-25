import React, {Component} from 'react';

class TabelaServicos extends Component{
	constructor(props){

		super(props)

		this.state = {
			servicos:[{nome: "Produto 1",pet: "Pet X", data: "16/09/2015", valor: 25.00 },{nome: "Produto 2",pet: "Pet X", data: "16/09/2015", valor: 45.00 }],
			total: 0
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
					<th>Pet</th>
					<th>Data</th>
					<th>Valor</th>
				</tr>
				</thead>
				<tbody>
				{this.state.servicos.map( (servico) => 
				<tr>
					<td>{servico.nome}</td>
					<td>{servico.pet}</td>
					<td>{servico.data}</td>
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
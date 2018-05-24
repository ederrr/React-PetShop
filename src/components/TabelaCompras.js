import React, {Component} from 'react';

class TabelaCompras extends Component{

	constructor(props){

		super(props)

		this.state = {
			compras:[{nome: "Produto 1", data: "16/09/2015", valor: 25.00 },{nome: "Produto 2", data: "16/09/2015", valor: 45.00 }],
			total: 0
		}

	}

	render(){
		return(
			<div className="row w-100 mx-auto">
			<p className="col col-12 h4 my-3">Compras Realizadas:</p>
			<div className="row w-100 mx-auto border">

			<table className="table table-hover table-bordered table-striped m-4">
				<thead className="thead-dark">
				<tr>
					<th>Produtos</th>
					<th>Data</th>
					<th>Valor</th>
				</tr>
				</thead>
				<tbody>
				{this.state.compras.map( (compra) => 
				<tr>
					<td>{compra.nome}</td>
					<td>{compra.data}</td>
					<td>R${compra.valor}</td>
				</tr>
				)}
				<tr>
					<th>Total </th>
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

export default TabelaCompras;
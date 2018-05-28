import React, {Component} from 'react';
import {buscaID} from '../service/acesso.api.js';

class TabelaCompras extends Component{

	constructor(props){

		super(props)

		this.state = {
			compras:[],
			total: 0
		}
	}

	componentDidMount(){
		buscaID("usuario", this.props.id).then((res) => {buscaID("compraproduto", res.data[0].comprasservicos).then((r) => {this.setState({compras: r.data})})});
	}

	render(){
		return(
			<div className="row w-100 mx-auto">
			<p className="col col-12 h4 my-3">Compras Realizadas:</p>
			<div className="row w-100 mx-auto border">

			<table className="table table-responsive-sm table-hover table-bordered table-striped m-4">
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
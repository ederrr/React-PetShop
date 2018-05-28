import React, {Component} from 'react';

class TabelaDescricao extends Component{

	render(){
		return(
			<div className="row w-100 mx-auto">

			<table className="table table-responsive-sm table-hover table-bordered table-striped m-4">
				<tbody>
				{this.props.descricao.map( (descricao) => 
				<tr key={descricao.nome} >
					<td >{descricao.nome}</td>
					<td>{descricao.descricao}</td>
				</tr>
				)}
				</tbody>
			</table>
				
			</div>
		);
	}
}

export default TabelaDescricao;
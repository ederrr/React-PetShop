import React, {Component} from 'react';

class TabelaDescricao extends Component{

	constructor(props){

		super(props)

		this.state = {
			descricao:[{nome: "Marca", descricao: "MadMax" },{nome: "	Nome", descricao: "Dink-D" }],
			total: 0
		}

	}

	render(){
		return(
			<div className="row w-100 mx-auto">

			<table className="table table-responsive-sm table-hover table-bordered table-striped m-4">
				<tbody>
				{this.state.descricao.map( (descricao) => 
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
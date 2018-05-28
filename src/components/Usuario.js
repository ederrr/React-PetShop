import React, {Component} from 'react';
import InfoUsuario from './InfoUsuario';
import ListPets from './ListPets';
import TabelaCompras from './TabelaCompras';
import TabelaServicos from './TabelaServicos';

class Usuario extends Component{
	render(){
		return(
			<div className="row w-100 mx-auto">
				<InfoUsuario id={this.props.match.params.id}/>
				<ListPets id={this.props.match.params.id}/>
				<TabelaCompras id={this.props.match.params.id} />
				<TabelaServicos id={this.props.match.params.id} tipo={"usuario"} />
			</div>
		);
	}
}

export default Usuario;
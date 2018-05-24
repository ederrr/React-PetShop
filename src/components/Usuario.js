import React, {Component} from 'react';
import InfoUsuario from './InfoUsuario';
import ListPets from './ListPets';
import TabelaCompras from './TabelaCompras';
import TabelaServicos from './TabelaServicos';

class Usuario extends Component{
	render(){
		return(
			<div className="row w-100 mx-auto">
				<InfoUsuario />
				<ListPets />
				<TabelaCompras />
				<TabelaServicos />
			</div>
		);
	}
}

export default Usuario;
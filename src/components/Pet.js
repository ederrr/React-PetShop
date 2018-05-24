import React, {Component} from 'react';
import InfoPet from './InfoPet';
import TabelaServicos from './TabelaServicos';

class Pet extends Component{
	render(){
		return(
			<div className="row w-100 mx-auto">
				<InfoPet />
				<TabelaServicos />
			</div>
		);
	}
}

export default Pet;
import React, {Component} from 'react';
import InfoPet from './InfoPet';
import TabelaServicos from './TabelaServicos';
import {buscaPet} from '../service/acesso.api.js';

class Pet extends Component{
	constructor(props){

		super(props)

		this.state = {
			pet : {
			"id": 1,
			"nome": "Pet 1",
			"foto": "dog.jpg",
			"sexo": "M",
			"tipo": "Cachorro",
			"peso": "3.0kg",
			"raca": "labrador",
			"pelagem": "marrom",
			"rga": 123123,
			"porte": "pequeno",
			"nascimento": "13/02/2016",
			"observacao": "alergia a carne"
		}
		}
	}

	componentDidMount(){
		buscaPet("pet", this.props.match.params.id).then((res) => this.setState({pet: res}))
	}
	render(){
		//{console.log(this.state)}
		return(
			<div className="row w-100 mx-auto">
				<InfoPet pet={this.state.pet} tipo={"pet"} />
				<TabelaServicos id={this.props.match.params.id} />
			</div>
		);
	}
}

export default Pet;

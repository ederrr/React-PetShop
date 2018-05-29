import React, {Component} from 'react';
import {buscaID} from '../service/acesso.api.js';

class ListPets extends Component{

	constructor(props){

		super(props)

		this.state = {
			pets:[]
		}

	}
	componentDidMount(){
		buscaID("usuario", this.props.id).then((res) => {buscaID("pet", res.data[0].pets).then((r) => {this.setState({pets: r.data})})});
	}

	render(){
		return(
			<div className="row w-100 mx-auto px-auto">
				<p className="col col-12 h6 my-3">Escolha seu pet:</p>
				{this.state.pets.map( (pet) => 
					<div key={pet.id} className=" col col-lg-3 col-6 shadow rounded text-center p-2 m-auto">
						<div >
						<img className="img-fluid " src={require(`../assets/fotos/${pet.foto}`)} alt="foto do pet" />
						</div>
						<div className="text-center">
							<input type="radio" name="pet" value={pet.id} />
							<p className="product mt-3 mb-2">{pet.nome}</p>
						</div>
					</div>
				)}
			</div>
		);
	}
}

export default ListPets;
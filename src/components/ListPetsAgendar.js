import React, {Component} from 'react';
import {buscaUsuario} from '../service/acesso.api.js';
import {buscaPet} from '../service/acesso.api.js';

class ListPets extends Component{

	constructor(props){

		super(props)

		this.state = {
			pets:[]
		}

	}
	componentDidMount(){
		var temp =[]
		buscaUsuario("usuario", this.props.id).then(
			(res) => {
				res.pets.map( (id) => {
					buscaPet("pet", id).then((p) => {
						temp = [...temp,p]
						this.setState({pets: temp})
					})
				})
			})	}

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

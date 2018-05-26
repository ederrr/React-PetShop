import React, {Component} from 'react';
import {Link} from 'react-router-dom';


class ListPets extends Component{

	constructor(props){

		super(props)

		this.state = {
			pets:[{nome: "Pet1"},{nome: "Pet2"},{nome: "Pet1"},{nome: "Pet2"}]
		}

	} 

	render(){
		return(
			<div className="row w-100 mx-auto">
				<p className="col col-12 h4 my-3">Meus pets:</p>
				{this.state.pets.map( (pet) => 
					<div className=" col col-lg-2 col-sm-5 pets shadow rounded text-center p-3 mx-1">
						<Link to={"/Pet"}>
						<img className="img-fluid " src={require(`../assets/fotos/dog.jpg`)} alt="foto do pet" />
						</Link>
						<div className="container">
							<p className="product mt-3 mb-2"><span className="fa fa-edit text-primary"></span>Pet 1<span className="fa fa-trash text-danger"></span></p>
						</div>
					</div>
				)}
				<Link to={"/CadastroPet"} className=" col col-lg-2 col-sm-5 pets shadow rounded text-center p-3 mx-1">
					<img className="img-fluid " src={require(`../assets/fotos/plus.png`)} alt="Adicionar pet" />
					<div className="container">
						<p className="h6 text-success mt-3 mb-2">Adicionar Pet</p>
					</div>
				</Link>
			</div>
		);
	}
}

export default ListPets;
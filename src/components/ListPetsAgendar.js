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
			<div className="row w-100 mx-auto px-auto">
				<p className="col col-12 h6 my-3">Escolha seu pet:</p>
				{this.state.pets.map( (pet) => 
					<div className=" col col-lg-3 col-6 pets shadow rounded text-center p-2 m-auto">
						<Link to={"/Pet"}>
						<img className="img-fluid " src={require(`../assets/fotos/dog.jpg`)} alt="foto do pet" />
						</Link>
						<div className="container">
							<p className="product mt-3 mb-2">Pet 1</p>
						</div>
					</div>
				)}
			</div>
		);
	}
}

export default ListPets;
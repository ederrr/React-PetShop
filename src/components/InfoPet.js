import React, {Component} from 'react';


class InfoPet extends Component{
	render(){
		return(
			<div className=" row w-100 mx-auto">
				<p className="h4">Pet1 Informações:</p>
				<div className=" row w-100 info border rounded mx-auto py-3">
					<div className="col col-lg-3 col-12 foto">
						<img className="img-fluid w-100 my-2" src={require(`../assets/fotos/${this.props.pet.foto}`)} alt="foto do usuario"/>
					</div>
					<div className="col col-lg-4 col-12 mt-5 descricao">
						<p className="text h5 my-0" >Nome: <small >{this.props.pet.nome}</small></p>
						<p className="text h5 my-0" >Nascomento: <small >{this.props.pet.nascimento}</small></p>
						<p className="text h5 my-0" >Espécie: <small >{this.props.pet.tipo}</small></p>
						<p className="text h5 my-0" >Raça: <small >{this.props.pet.raca}</small></p>
						<p className="text h5 my-0" >Porte: <small >{this.props.pet.porte}</small></p>
					</div>
					<div className="col col-lg-4 col-12 mt-5 endereco">
						<p className="text h5 my-0" >Sexo: <small>{this.props.pet.sexo}</small></p>
						<p className="text h5 my-0" >Pelagem: <small>{this.props.pet.pelagem}</small></p>
						<p className="text h5 my-0" >RGA: <small>{this.props.pet.rga}</small></p>
						<p className="text h5 my-0" >Peso: <small>{this.props.pet.peso}</small></p>

					</div>
					<span className="fa fa-edit text-primary col col-offset-12" onclick="editUsuario()"></span>
				</div>

			</div>
		);
	}
}

export default InfoPet;
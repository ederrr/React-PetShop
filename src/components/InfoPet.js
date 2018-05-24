import React, {Component} from 'react';


class InfoPet extends Component{
	render(){
		return(
			<div className=" row w-100 mx-auto">
				<p className="h4">Pet1 Informações:</p>
				<div className=" row w-100 info border rounded mx-auto py-3">
					<div className="col col-lg-3 col-sm-12 foto">
						<img className="img-fluid w-100 my-2" src={require(`../assets/fotos/user.png`)} alt="foto do usuario"/>
					</div>
					<div className="col col-lg-4 col-sm-12 mt-5 descricao">
						<p className="text h5 my-0" >Nome: <small >Usuario1</small></p>
						<p className="text h5 my-0" >Idade: <small >usuario@email.com</small></p>
						<p className="text h5 my-0" >Espécie: <small >334.223.452-23</small></p>
						<p className="text h5 my-0" >Raça: <small >25/04/1992</small></p>
						<p className="text h5 my-0" >Porte: <small >Masculino</small></p>
					</div>
					<div className="col col-lg-4 col-sm-12 mt-5 endereco">
						<p className="text h5 my-0" >Sexo: <small>Joaquim José João da Silva</small></p>
						<p className="text h5 my-0" >Pelagem: <small>1234</small></p>
						<p className="text h5 my-0" >RGA: <small>Centro</small></p>
						<p className="text h5 my-0" >Peso: <small>São Carlos</small></p>

					</div>
					<span className="fa fa-edit text-primary col col-offset-12" onclick="editUsuario()"></span>
				</div>

			</div>
		);
	}
}

export default InfoPet;
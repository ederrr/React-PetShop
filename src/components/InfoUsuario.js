import React, {Component} from 'react';


class InfoUsuario extends Component{
	render(){
		return(
			<div className=" row w-100 mx-auto">
				<p className="h4">Minhas Informações:</p>
				<div className=" row w-100 info border rounded mx-auto py-3">
					<div className="col col-lg-3 col-12 foto">
						<img className="img-fluid w-100 my-2" src={require(`../assets/fotos/user.png`)} alt="foto do usuario"/>
					</div>
					<div className="col col-lg-4 col-12 mt-5 descricao">
						<p className="text h5 my-0" >Nome: <small >Usuario1</small></p>
						<p className="text h5 my-0" >Email: <small >usuario@email.com</small></p>
						<p className="text h5 my-0" >CPF: <small >334.223.452-23</small></p>
						<p className="text h5 my-0" >Data de Nacimento: <small >25/04/1992</small></p>
						<p className="text h5 my-0" >Sexo: <small >Masculino</small></p>
						<p className="text h5 my-0" >Telefone: <small >(16) 3301-0101</small></p>

					</div>
					<div className="col col-lg-4 col-12 mt-5 endereco">
						<p className="text h5 my-0" >Rua: <small>Joaquim José João da Silva</small></p>
						<p className="text h5 my-0" >Número: <small>1234</small></p>
						<p className="text h5 my-0" >Bairro: <small>Centro</small></p>
						<p className="text h5 my-0" >Cidade: <small>São Carlos</small></p>
						<p className="text h5 my-0" >Estado: <small>São Paulo</small></p>

					</div>
					<span className="fa fa-edit text-primary col col-offset-12" onclick="editUsuario()"></span>
				</div>

			</div>
		);
	}
}

export default InfoUsuario;
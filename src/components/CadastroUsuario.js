import React, {Component} from 'react';


class CadastroUsuario extends Component{
	render(){
		return(
		<div className="my-4 mx-auto w-100">
		<p className="h4">Cadastro de Usuário:</p>
		<form className=" row w-100 mx-auto p-2">
		<div className="col col-lg-5 col-sm-12 w-100 bg-light mx-lg-auto py-3 my-2">
			<div className=" w-100 mx-auto my-4 text-center">
				<p className="h5">Dados do Usuário</p>
			</div>
			<label className="col h6 ">Nome:</label>
				<input type="text" className=" input w-100" name="nome" value=""/>
			<label className="col h6 ">Email:</label>
				<input type="email" className=" input w-100" name="email" value=""/>
			<label className="col h6 ">Senha:</label>
				<input type="password" className=" input w-100" name="senha" value=""/>
			<label className="col h6 ">Confirmar Senha:</label>
				<input type="password" className=" input w-100" name="confirmar-senha" value=""/>
			<label className="col h6 ">Sexo:</label>
				<select className="col col-lg-3" name="sexo">
					<option disabled selected value></option>
					<option value="m">Masculino</option>
					<option value="f">Feminino</option>
					<option value="o">Outro</option>
				</select>
			<label className="col h6 ">CPF:</label>
				<input type="number" className=" input w-100" name="cpf" value=""/>
			<label className="col h6 ">Data de Nascimento:</label>
				<input type="date" className=" input w-100 col col-lg-7" name="data" value=""/>
			<label className="col h6 ">Foto:</label>
				<input type="file" className=" input w-100" name="foto" accept="image/*"/>
			<label className="col h6 ">Telefone:</label>
				<input type="tel" className=" input w-100" name="telefone" value=""/>

		</div>

		<div className="col col-lg-5 col-sm-12 w-100 bg-light mx-lg-auto py-3 my-2">
			<div className=" w-100 mx-auto my-4 text-center">
				<p className="h5">Endereço do Usuário</p>
			</div>
			<label className="col h6 ">Endereço:</label>
				<input type="text" className=" input w-100" name="endereco" value=""/>
			<label className="col h6 ">Número:</label>
				<input type="number" className=" input w-100" name="numero" value=""/>
			<label className="col h6 ">CEP:</label>
				<input type="number" className=" input w-100" name="cep" value=""/>
			<label className="col h6 ">Complemento:</label>
				<input type="text" className=" input w-100" name="complemento" value=""/>
			<label className="col h6 ">Bairro:</label>
				<input type="text" className=" input w-100" name="bairro" value=""/>
			<label className="col h6 ">Cidade:</label>
				<input type="text" className=" input w-100" name="cidade" value=""/>
			<label className="col h6 ">Estado:</label>
				<input type="text" className=" input w-100" name="estado" value=""/>
			<label className="col  h6 ">Referência:</label>
			<textarea type="text" className=" input w-100" name="referencia" value=""></textarea>
				


			
		</div>
		<div className=" w-100 mx-auto text-center my-4">
			<input className="btn btn-success " type="submit" value="Cadastrar Usuário" id="envio"/>
		</div>

		</form>
		</div>
		);
	}
}

export default CadastroUsuario;
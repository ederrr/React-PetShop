import React, {Component} from 'react';


class CadastroServico extends Component{
	render(){
		return(
		<div className="my-4 mx-auto w-100">
		<p className="h4">Cadastro de Serviço:</p>
		<form className="mx-auto bg-light p-2">
			<div className=" w-100 mx-auto my-4 text-center">
				<p className="h5">Dados do Serviço</p>
			</div>
			<label className="col h6 ">Nome:</label>
				<input type="text" className=" input w-100" name="nome" value=""/>

			<label className="col h6 ">Foto:</label>
				<input type="file" className=" input w-100" name="foto" accept="image/*"/>
			
			
			<label className="col h6 ">Animais Possíveis:</label>

					<input className="col col-1" type="radio" id="cachorro" value="cachorro"/><label>Cachorro</label>
					<input className="col col-1" type="radio" id="cavalo" value="cavalo"/><label>Cavalo</label>
					<input className="col col-1" type="radio" id="gato" value="gato"/><label>Gato</label>
					<input className="col col-1" type="radio" id="passaro" value="passaro"/><label>Pássaro</label>
					<input className="col col-1" type="radio" id="peixe" value="peixe"/><label>Peixe</label>
					<input className="col col-1" type="radio" id="roedor" value="roedor"/><label>Roedor</label>
					<input className="col col-1" type="radio" id="outros" value="exotico"/><label>Outro...</label>
			<label className="col h6 ">Preço:</label>
				<input type="number" className=" input w-100" name="preco" value=""/>

			<label className="col  h6 ">Descrição:</label>
				<textarea type="text" className=" input w-100" name="descricao" value=""></textarea>
				<div className=" w-100 mx-auto text-center my-4">
					<input className="btn btn-success " type="submit" value="Cadastrar Serviço" id="envio"/>
				</div>
		</form>
		</div>
		);
	}
}

export default CadastroServico;
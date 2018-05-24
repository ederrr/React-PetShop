import React, {Component} from 'react';


class CadastroProduto extends Component{
	render(){
		return(
		<div className="my-4 mx-auto w-100">
		<p className="h4">Cadastro de Pet:</p>
		<form className="mx-auto bg-light p-2">
		<fieldset>
			<div className=" w-100 mx-auto my-4 text-center">
				<p className="h5">Dados do Pet</p>
			</div>
			<label className="col h6 ">Nome:</label>
				<input type="text" className=" input w-100" name="nome" value=""/>

			<label className="col h6 ">Foto:</label>
				<input type="file" className=" input w-100" name="foto" accept="image/*"/>
			
			<label className="col h6 ">Sexo:</label>
				<select className="col col-lg-3" name="sexo">
					<option disabled selected value></option>
					<option value="f">Fêmea</option>
					<option value="m">Macho</option>
				</select>
			
			<label className="col h6 ">Tipo do Animal:</label>
				<select className="col col-lg-3" name="especie">
					<option disabled selected value></option>
					<option value="cachorro">Cachorro</option>
					<option value="cavalo">Cavalo</option>
					<option value="gato">Gato</option>
					<option value="passaro">Pássaro</option>
					<option value="peixe">Peixe</option>
					<option value="roedor">Roedor</option>
					<option value="exotico">Outro...</option>
				</select>
			
			<label className="col h6 ">Peso Líquido:</label>
				<input type="text" className=" input col col-lg-2 mx-lg-2" name="peso" value=""/>
				<select className="col col-lg-1" name="altura">
				  <option value="ml">ml</option>
				  <option value="l">l</option>
				  <option value="g">m</option>
				  <option value="kg">m</option>
				</select>			

			<label className="col h6 ">Raça:</label>
				<input type="text" className=" input w-100" name="raca" value=""/>
			
			<label className="col h6 ">Pelagem/Cor:</label>
				<input type="text" className=" input w-100" name="cor" value=""/>
			<label className="col h6 ">RGA:</label>
				<input type="number" className=" input w-100" name="rga" value=""/>
			
			<label className="col h6 ">Porte:</label>
				<select className="col col-lg-3" name="porte">
					<option disabled selected value></option>
					<option value="pequeno">Pequeno</option>
					<option value="medio">Médio</option>
					<option value="grande">Grande</option>
				</select>
			<label className="col h6 ">Data de Nascimento:</label>
				<input type="date" className=" input w-100 col col-lg-3" name="cor" value=""/>
			<label className="col h6 ">Peso(Kg):</label>
				<input type="number" className=" input w-100" name="rga" value=""/>
			<div className=" w-100 mx-auto text-center my-4">
					<input className="btn btn-success " type="submit" value="Cadastrar Pet" id="envio"/>
				</div>
		</fieldset>
		</form>
		</div>
		);
	}
}

export default CadastroProduto;
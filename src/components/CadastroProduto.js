import React, {Component} from 'react';


class CadastroProduto extends Component{
	render(){
		return(
		<div className="my-4 mx-auto w-100">
		<p className="h4">Cadastro de Produto:</p>
		<form className="mx-auto bg-light p-2">
		<fieldset>
			<div className=" w-100 mx-auto my-4 text-center">
				<p className="h5">Dados do Produto</p>
			</div>
			<label className="col h6 ">Nome:</label>
				<input type="text" className=" input w-100" name="nomedoproduto" value=""/>
			
			<label className="col h6 ">ID:</label>
				<input type="text" className=" input w-100" name="iddoproduto" value=""/>
			
			<label className="col h6 ">Preço:</label>
				<input type="text" className=" input w-100" name="precoproduto" value=""/>
			
			<label className="col h6 ">Foto do Produto:</label>
				<input type="file" className=" input w-100" name="fotoproduto" accept="image/*"/>
			
			<label className="col h6 ">Categoria:</label>
				<input type="text" className=" input w-100" name="categoria" value=""/>
			
			<label className="col h6 ">Marca:</label>
				<input type="text" className=" input w-100" name="marca" value=""/>
			
			<label className="col h6 ">Peso Líquido:</label>
				<input type="text" className=" input col col-lg-2 mx-lg-2" name="pesoproduto" value=""/>
				<select className="col col-lg-1" name="altura">
				  <option value="ml">ml</option>
				  <option value="l">l</option>
				  <option value="g">m</option>
				  <option value="kg">m</option>
				</select>			
			<label className="col  h6 ">Tipo de Embalagem:</label>
				<input type="text" className=" input w-100" name="tipoembalagem" value=""/>
			
			<label className="col  h6 ">Dimensões (Altura x Largura x Comprimento):</label>
				<input type="number" className=" input col col-lg-2 mx-lg-2" name="dimensao" value=""/>
				<select className="col col-lg-1" name="altura">
				  <option value="mm">mm</option>
				  <option value="cm">cm</option>
				  <option value="m">m</option>
				</select>
				<p className="col col-lg-1">x</p>
				<input type="number" className=" input col col-lg-2 mx-lg-2" name="dimensao" value=""/>
				<select className="col col-lg-1" name="largura">
				  <option value="mm">mm</option>
				  <option value="cm">cm</option>
				  <option value="m">m</option>
				</select>
				<p className="col col-lg-1">x</p>
				<input type="number" className=" input col col-lg-2 mx-lg-2" name="dimensao" value=""/>
				<select className="col col-lg-1" name="comprimento">
				  <option value="mm">mm</option>
				  <option value="cm">cm</option>
				  <option value="m">m</option>
				</select>
			
			<label className="col  h6 ">Quantidade:</label>
				<input type="number" className=" input w-100" name="quantidade" value=""/>
			
			<label className="col  h6 ">Descrição:</label>
				<textarea type="text" className=" input w-100" name="descricao" value=""></textarea>
				<div className=" w-100 mx-auto text-center my-4">
					<input className="btn btn-success " type="submit" value="Cadastrar Produto" id="envio"/>
				</div>
		</fieldset>
		</form>
		</div>
		);
	}
}

export default CadastroProduto;
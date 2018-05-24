import React,{Component} from 'react';

class CalculoFrete extends Component{

	render(){

		return(

			<div>

			<p className="h5">Calcular Frete:</p>
			<div className="input-group row mx-auto"><input className="input offset-lg-2 col-lg-5 rounded" type="number" ></input><button className="btn col-lg-3 ">Calcular</button></div>
			<p className="h5 pt-5">Prazo de Entrega:</p>
			<p className="h5 text-secondary">Dia de São Longuinho</p>
			<p className="h5">Valor do Frete:</p>
			<p className="h5 text-secondary">R$2,99</p>

			</div>
		);
	}

}

export default CalculoFrete;

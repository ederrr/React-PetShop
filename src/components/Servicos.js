import React, {Component} from 'react';

import banho from '../assets/fotos/banho.png';

const listaServicos = {

	servico: [
		{nome: "Banho", descricao: "Banho com shampoo neutro específico para animais para realizar a limpeza mais delicada (segundo enxágue). Com o ar aquecido, o acabamento do banho é realizado com a secagem e escovação dos pelos ao mesmo tempo. Este processo é realizado até a retirada total da umidade.", infoValor: "* Valor especificado dependendo da espécie e raça do animal."},
		{nome: "Banho", descricao: "Banho com shampoo neutro específico para animais para realizar a limpeza mais delicada (segundo enxágue). Com o ar aquecido, o acabamento do banho é realizado com a secagem e escovação dos pelos ao mesmo tempo. Este processo é realizado até a retirada total da umidade.", infoValor: "* Valor especificado dependendo da espécie e raça do animal."}

	]
};

class Especie extends Component{

	render(){
		return(
			<div>
			{listaServicos.servico.map( (servico) => 
			<div className="row servico rounded border text-center my-3 px-3" >
				
				<div className="row">
					<div className=" col imagem my-auto">
						<img className="img-fluid" src={banho} alt="imagem do servico"/>
					</div>
					<div className=" col col-lg-7 resumo my-auto">
						<p className="h3 text-center">{servico.nome}</p>
						<p className="text-justify">{servico.descricao}</p>
						<p className="valor">{servico.infoValor}</p>
					</div>
					<div className = " col my-auto">
						<button className="bt-agendar btn-success" >Agendar</button>
					</div>
				</div>

			</div >)}
		</div>

		);
	}
}


export default Especie;
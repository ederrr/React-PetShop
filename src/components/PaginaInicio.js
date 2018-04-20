import React, {Component} from 'react';

import fotoDog from '../assets/fotos/dog.jpg';
import SlideShow from './SlideShow';

const listaProdutos = {

	produto: [
		{nome: "Produto 1", preco: 0.00},
		{nome: "Produto 1", preco: 0.00},
		{nome: "Produto 1", preco: 0.00},
		{nome: "Produto 1", preco: 0.00}
	]

};


class PaginaInicio extends Component{

	render(){

		return(

				<div>
					
					<SlideShow />

					<p className="h4" >Destaques Cachorros:</p>
					
					<div className="row">
						{listaProdutos.produto.map( (produto) => 
							<div className=" col shadow rounded m-1 p-auto produto" >
								<img className= "img-fluid pt-3" src={fotoDog} alt="foto do produto" />
								<div className="container">
									<p className=" text-center text font-weight-bold text-secondary product mt-2 mb-0">{produto.nome}</p>
									<p className=" text-center text text-secondary price">{produto.preco}</p>
								</div>
							</div>)}
					</div>
					
				</div>
		);
	}
}


export default PaginaInicio;
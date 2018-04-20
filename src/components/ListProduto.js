import React from 'react';
import fotoCat from '../assets/fotos/cat.jpg';

const ListProduto = props =>{

	return(

		<div>

			<p className="h4" >Produtos para {props.especie}:</p>
			
			<div className="row">
				{props.produtos.map( (produto) => (
					<div className="col col-lg-3 col-sm-12 col-md-6 px-1">
						<div className=" shadow rounded text-center produto" >
							<img className= "img-fluid p-3" src={fotoCat} alt="foto do produto" />
							<div className="container pb-2">
								<p className=" text-center text font-weight-bold text-secondary product mt-2 mb-0">{produto.name}</p>
								<p className=" text-center text text-secondary price">{produto.id}</p>
							</div>
						</div>
					</div>))}
			</div>
			
		</div>


	);


}

export default ListProduto;

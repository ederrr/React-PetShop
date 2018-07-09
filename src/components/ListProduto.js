import React ,{Component} from 'react';
import {Link} from 'react-router-dom';

class ListProduto extends Component{

	render(){
		return(

			<div>

				<p className="h4" >Produtos para {this.props.especie}:</p>


				<div className="row">
					{this.props.produtos.map( (produto) => {if (produto.doc.categoria === this.props.especie) { return(
						<Link key={produto.id} className="col col-lg-3 col-sm-6 my-1" to= {`/Produto${produto.doc._id}`} >
							<div className="shadow rounded text-center produto" >
								<img className= "img-fluid p-3 " src={require(`../assets/fotos/${produto.doc.imagem[0]}`)} alt="foto do produto" />
								<div className="container pb-2">
									<p className=" text-center text font-weight-bold text-secondary product mt-2 mb-0">{produto.doc.nome}</p>
									<p className=" text-center text text-secondary price" >{produto.doc.preco}</p>
								</div>
							</div>
						</Link>)}else{return(<div></div>)}})}
				</div>

			</div>


		);

	}
}

export default ListProduto;

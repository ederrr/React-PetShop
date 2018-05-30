import React ,{Component} from 'react';
import {Link} from 'react-router-dom';
import {removeID} from '../service/acesso.api'

class ListItemEditar extends Component{

	deletarItem(i){
		//removeID(this.props.tipo, i.id)

	}

	tipoImagem(i){
		if(this.props.tipo === "produto"){
			return(require(`../assets/fotos/${i.imagem[0]}`))
		}
		else if(this.props.tipo === "servico"){
			return(require(`../assets/fotos/${i.imagem}`))
		}
		else{ 
			return(require(`../assets/fotos/${i.foto}`) )
		}
	}

	render(){
		return(

			<div>

				<div className="row w-100 p-3 m-3 ">
					{this.props.itens.map( (i) => (
						<div key={i.id} className="col col-lg-4 col-6 my-1 mw-100"  >
							<div className="shadow rounded text-center  " >
								<img className= "img-fluid p-2" src={this.tipoImagem(i)} alt="foto do item" />
								<div className="container pb-2">
									<p className=" text-center text font-weight-bold text-secondary mt-2 mb-0 p-2">{i.nome}</p>
									<p className=" text-center text text-secondary price" >{i.id}</p>
									{/*<span onClick={this.deletarItem(i)} className="fa fa-trash text-danger px-1 mx-1"></span>*/}
								</div>
							</div>
						</div>))}
				</div>
				
			</div>


		);

	}
}

export default ListItemEditar;
import React ,{Component} from 'react';
import {Link} from 'react-router-dom';

class ListItemEditar extends Component{

	render(){
		return(

			<div>

				<div className="row">
					{this.props.itens.map( (i) => (
						<Link key={i.id} className="col col-lg-2 col-sm-6 my-1" to= {`/Produto${i.id}`} >
							<div className="shadow rounded text-center " >
								<img className= "img-fluid p-3 " src={require(`../assets/fotos/${i.imagem[0]}`)} alt="foto do item" />
								<div className="container pb-2">
									<p className=" text-center text font-weight-bold text-secondary mt-2 mb-0">{i.nome}</p>
									<p className=" text-center text text-secondary price" >{i.id}</p>
								</div>
							</div>
						</Link>))}
				</div>
				
			</div>


		);

	}
}

export default ListItemEditar;
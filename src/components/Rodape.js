import React, {Component} from 'react';


class Rodape extends Component{
	render(){

		return(
			<footer>
				<div className="row text-center small p-2">
					<a href="http://github.com/ederrr" className="col-lg-3 offset-1 col-sm-12 text-secondary">Eder Rosati Ribeiro</a><span> | </span><a className="col-lg-3 col-sm-12 text-secondary">Leonardo de Almeida Lima Zanguetin</a><span> | </span><a href="https://github.com/vpereira13" className="col-lg-3 col-sm-12 text-secondary">Victor Luiz da Silva Mariano Pereira</a>
				</div>
			</footer>
		);
	}
}

export default Rodape;
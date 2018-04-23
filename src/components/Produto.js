import React,{Component} from 'react';

class Produto extends Component{

	

	render(){

		return(
			<div>
			<p>{this.props.match.params.id}</p>
			<img src={require("../assets/fotos/cat.jpg")} alt="eder" />
			</div>

		);
	}

}

export default Produto;

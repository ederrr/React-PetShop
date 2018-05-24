import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Busca extends Component{

	constructor(props) {
		super(props);
		this.state = {value: ''};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		this.setState({value: event.target.value});
	}

	handleSubmit(event) {
		event.preventDefault();		
	}


	render(){

		return(
			<div id="busca" className="col-lg-7 m-auto ">
				<form className="form-group" onSubmit={this.handleSubmit}>
					<div className="form-row pt-lg-5">
						<input className=" col-lg-7 offset-lg-1 mr-lg-1 border border-success rounded small" type="text" name="busca" value={this.state.value} onChange={this.handleChange}/>
						<Link to= {`/Buscados${this.state.value}`}  className="btn-success text-center col-lg-2 rounded small" >Buscar</Link>
					</div>
				</form>
			</div>
		);
	}
}

export default Busca;
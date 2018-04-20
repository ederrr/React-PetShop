import React, {Component} from 'react';


class Busca extends Component{
	render(){

		return(
			<div id="busca" className="col-lg-7 m-auto ">
				<form className="form-group">
					<div className="form-row pt-lg-5">
						<input className=" col-lg-7 offset-lg-1 mr-lg-1 border border-success rounded small" type="text" name="busca"/>
						<button className="btn-success col-lg-2 rounded small" >Buscar</button>
					</div>
				</form>
			</div>
		);
	}
}

export default Busca;
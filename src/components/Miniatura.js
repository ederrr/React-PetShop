import React, {Component} from 'react'

export class Miniatura extends Component{

	render(){

		return(
			<div className = "col col-3 py-3 " onClick={(e) => this.props.onClick(this.props, e)}>
				<img className= "img-fluid px-1" src={require(`../assets/fotos/${this.props.imagem}`)} alt="foto do produto" />
			</div> 
		)
	}

}
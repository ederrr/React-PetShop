import React, {Component} from 'react';
import ListDestaques from './ListDestaques';
import SlideShow from './SlideShow';


class PaginaInicio extends Component{

	render(){

		return(

				<div>
					
					<SlideShow />
					<ListDestaques repos="produto" especie="cachorros"/>
					<ListDestaques repos="produto" especie="gatos"/>
					<ListDestaques repos="produto" especie="cavalos"/>
					<ListDestaques repos="produto" especie="roedores"/>
					<ListDestaques repos="produto" especie="passaros"/>
					<ListDestaques repos="produto" especie="peixes"/>
					<ListDestaques repos="produto" especie="exoticos"/>
					

				</div>
		);
	}
}


export default PaginaInicio;
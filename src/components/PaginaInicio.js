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
					

				</div>
		);
	}
}


export default PaginaInicio;
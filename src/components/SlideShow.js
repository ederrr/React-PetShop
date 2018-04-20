import React,{Component} from 'react';
import dog from '../assets/fotos/1.jpg';
import cat from '../assets/fotos/3.jpg';
import bird from '../assets/fotos/2.jpg';

class SlideShow extends Component{

	render(){
		return(

			<div id="demo" className="carousel slide mx-auto my-3 text-center" data-ride="carousel">

				<ul className="carousel-indicators">
					<li data-target="#demo" data-slide-to="0" className="active"></li>
					<li data-target="#demo" data-slide-to="1"></li>
					<li data-target="#demo" data-slide-to="2"></li>
				</ul>
				

				<div className="carousel-inner">
					<div className="carousel-item active">
						<img className="img-fluid" src={dog} alt="dog" />
					</div>
					<div className="carousel-item">
						<img className="img-fluid" src={bird} alt="bird" />
					</div>
					<div className="carousel-item">
						<img className="img-fluid" src={cat} alt="cat" />
					</div>
				</div>
				

				<a className="carousel-control-prev" href="#demo" data-slide="prev">
					<span className="carousel-control-prev-icon"></span>
				</a>
				<a className="carousel-control-next" href="#demo" data-slide="next">
					<span className="carousel-control-next-icon"></span>
				</a>
			</div>

		);
	}

}

export default SlideShow;

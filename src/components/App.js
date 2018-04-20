import React, {Component} from 'react';
import Topo from './Topo';
import Navbar from './Navibar'
import Conteudo from './Conteudo'
import Rodape from './Rodape'

class App extends Component{
	render(){
		return(
			<div className= "container">
			<Topo />
			<Navbar />
			<Conteudo/>
			<Rodape />
			</div>
		);
	}
}

export default App;
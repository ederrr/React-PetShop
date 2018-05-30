import React, {Component} from 'react'
import {Provider} from 'react-redux'
import Store from './Store'
import Topo from './Topo'
import Navbar from './Navibar'
import Conteudo from './Conteudo'
import Rodape from './Rodape'

class App extends Component{
	render(){
		return(
			<Provider store={Store}>
			<div className= "container">
			<Topo />
			<Navbar />
			<Conteudo/>
			<Rodape />
			</div>
			</Provider>
		);
	}
}

export default App;
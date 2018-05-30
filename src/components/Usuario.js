import React, {Component} from 'react';
import InfoUsuario from './InfoUsuario';
import ListPets from './ListPets';
import TabelaCompras from './TabelaCompras';
import TabelaServicos from './TabelaServicos';
import ListItemEditar from './ListItemEditar';
import {connect} from 'react-redux';
import {buscaCategoria} from '../service/acesso.api'
import {buscaID} from '../service/acesso.api'
import {buscaNome} from '../service/acesso.api'
import {Link} from 'react-router-dom';
import CadastroProduto from './CadastroProduto';
import CadastroServico from './CadastroServico';
import CadastroUsuario from './CadastroUsuario';



class Usuario extends Component{

	constructor(props){
		super(props)
		this.state ={
			itensS: [],
			itensU: [],
			itensP: [],
			valorP: '',
			valorS: '',
			valorU: '',
			tipoP: 'nome',
			tipoS: 'nome',
			tipoU: 'nome'

		}
		this.handleChange = this.handleChange.bind(this);
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(e){
		if(e.target.name === "buscaP"){
			if(this.state.tipoP === "id"){
				buscaID("produto",this.state.valorP).then((res) => { return( this.setState({itensP: res.data}) ) })
			}
			else if(this.state.tipoP === "categoria"){
				buscaCategoria("produto",this.state.valorP).then((res) => { return( this.setState({itensP: res.data}) ) })
			}
			else{
				buscaNome("produto",this.state.valorP).then((res) => { return( this.setState({itensP: res.data}) ) })
			}
		}
		else if(e.target.name === "buscaS"){
			if(this.state.tipoS === "id"){
				buscaID("servico",this.state.valorS).then((res) => { return( this.setState({itensS: res.data}) ) })
			}
			else if(this.state.tipoS === "nome"){
				buscaNome("servico",this.state.valorS).then((res) => { return( this.setState({itensS: res.data}) ) })
			}
		}
		else if(e.target.name === "buscaU"){
			if(this.state.tipoU === "id"){
				buscaID("usuario",this.state.valorU).then((res) => { return( this.setState({itensU: res.data}) ) })
			}
			else if(this.state.tipoU === "nome"){
				buscaNome("usuario",this.state.valorU).then((res) => { return( this.setState({itensU: res.data}) ) })
			}
		}
	}

	handleChange(e){
		if(e.target.name === "valorP")
			this.setState({valorP: e.target.value});
		else if(e.target.name === "valorS")
			this.setState({valorS: e.target.value});
		else if(e.target.name === "valorU")
			this.setState({valorU: e.target.value});
		else if(e.target.name === "tipoP")
			this.setState({tipoP: e.target.value});
		else if(e.target.name === "tipoS")
			this.setState({tipoS: e.target.value});
		else if(e.target.name === "tipoU")
			this.setState({tipoU: e.target.value});
	}

	render(){
		if(this.props.logado && !this.props.admin ){
			return(
				<div className="row w-100 mx-auto">
					<InfoUsuario id={this.props.id}/>
					<ListPets id={this.props.id}/>
					<TabelaCompras id={this.props.id} />
					<TabelaServicos id={this.props.id} tipo={"usuario"} />
				</div>
			);
		}
		else if(this.props.logado && this.props.admin ){
			return(
				<div className="row w-100 mx-auto">

					<InfoUsuario id={this.props.id}/>
					<ListPets id={this.props.id}/>
					<TabelaCompras id={this.props.id} />
					<TabelaServicos id={this.props.id} tipo={"usuario"} />

					<p className="h4 p-3">Área de Administrador:</p>
					<div className="row w-100 mx-auto rounded border mb-1">
					<Link to="/CadastroProduto" className="fa fa-plus col col-1 col-offset-11 text-success" ></Link>
					<p className="h6 row p-2" >Buscar Produtos:</p>
					<input type="text" className="m-2" onChange={this.handleChange} value={this.state.valorP} name="valorP" />
					<select name="tipoP" className="m-2" onChange={this.handleChange} value={this.state.tipoP}  >
						<option value="nome">nome</option>
						<option value="categoria">categoria</option>
						<option value="id">id</option>
					</select>
					<button className="m-2" name="buscaP" onClick={this.handleClick} >Buscar</button>
					<div className="row w-100 p-2">
						<ListItemEditar itens={this.state.itensP} tipo={"produto"}/>
						</div>
					</div>

					<div className="row w-100 mx-auto rounded border mb-1">
					<Link to="/CadastroServico" className="fa fa-plus col col-1 col-offset-11 text-success" ></Link>
					<p className="h6 row p-2" >Buscar Servicos:</p>
					<input type="text" className="m-2" onChange={this.handleChange} value={this.state.valorS} name="valorS" />
					<select name="tipoS" className="m-2" onChange={this.handleChange} value={this.state.tipoS}  >
						<option value="nome">nome</option>
						<option value="id">id</option>
					</select>
					<button className="m-2" name="buscaS" onClick={this.handleClick} >Buscar</button>
					<div className="row w-100 p-2">
						<ListItemEditar itens={this.state.itensS} tipo={"servico"}/>
						</div>
					</div>

					<div className="row w-100 mx-auto rounded border mb-1">
					<Link to="/CadastroUsuario" className="fa fa-plus col col-1 col-offset-11 text-success" ></Link>
					<p className="h6 row p-2" >Buscar Usuários:</p>
					<input type="text" className="m-2" onChange={this.handleChange} value={this.state.valorU} name="valorU" />
					<select name="tipoU" className="m-2" onChange={this.handleChange} value={this.state.tipoU}  >
						<option value="nome">nome</option>
						<option value="id">id</option>
					</select>
					<button className="m-2" name="buscaU" onClick={this.handleClick} >Buscar</button>
					<div className="row w-100 p-2">
						<ListItemEditar itens={this.state.itensU} tipo={"usuario"}/>
						</div>
					</div>
				</div>
			);
		}
		else{
			return(<p>Cadastre-se ou realize login para acessar.</p>);
		}

	}
}

const mapStateToProps = state => ({
	id: state.id,
	logado: state.logado,
	admin: state.admin
	
});

export default connect(mapStateToProps) (Usuario);
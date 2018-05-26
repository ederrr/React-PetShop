import React, {Component} from 'react';


class CadastroUsuario extends Component{

	constructor(props){

		super(props)
		this.state = {
			valueNome: '',
			valueEmail: '',
			valueSenha: '',
			valueConfirmarSenha: '',
			valueSexo: "",
			valueCPF: '',
			valueNascimento: '',
			valueFoto: '',
			valueTelefone: '',
			valueEndereco: '',
			valueNumero: "",
			valueComplemento: '',
			valueBairro: '',
			valueCidade: '',
			valueEstado: '',
			valueReferencia: '',
		}
		this.handleChange = this.handleChange.bind(this);
		//this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		if(event.target.name === "nome")
			this.setState({valueNome: event.target.value});
		else if(event.target.name === "email")
			this.setState({valueEmail: event.target.value});
		else if(event.target.name === "senha")
			this.setState({valueSenha: event.target.value});
		else if(event.target.name === "confirmar-senha")
			this.setState({valueConfirmarSenha: event.target.value});
		else if(event.target.name === "cpf")
			this.setState({valueCPF: event.target.value});
		else if(event.target.name === "sexo")
			this.setState({valueSexo: event.target.value});
		else if(event.target.name === "data")
			this.setState({valueNascimento: event.target.value});
		else if(event.target.name === "foto")
			this.setState({valueFoto: event.target.value});
		else if(event.target.name === "telefone")
			this.setState({valueTelefone: event.target.value});
		else if(event.target.name === "endereco")
			this.setState({valueEndereco: event.target.value});
		else if(event.target.name === "numero")
			this.setState({valueNumero: event.target.value});
		else if(event.target.name === "complemento")
			this.setState({valueComplemento: event.target.value});
		else if(event.target.name === "bairro")
			this.setState({valueBairro: event.target.value});
		else if(event.target.name === "cidade")
			this.setState({valueCidade: event.target.value});
		else if(event.target.name === "estado")
			this.setState({valueEstado: event.target.value});
		else if(event.target.name === "referencia")
			this.setState({valueReferencia: event.target.value});
		
	}
	/*handleClick(event){
		if(event.target.name === "sair")
			this.setState({logado: false});

	}


	handleSubmit(event) {
		event.preventDefault();
		login("usuario", this.state.valueEmail, this.state.valueSenha).then( res => { 
			if (res.data.length === 0) {
				this.setState({mensagem: "Email ou Senha Inválidos"})
			}
			else{
				res.data.map( (u)=>{this.setState({ logado: true})} )

			} 
		})

	}*/

	render(){
		{console.log(this.state)}
		return(
		<div className="my-4 mx-auto w-100">
		<p className="h4">Cadastro de Usuário:</p>
		<form className=" row w-100 mx-auto p-2">
		<div className="col col-lg-5 col-sm-12 w-100 bg-light mx-lg-auto py-3 my-2">
			<div className=" w-100 mx-auto my-4 text-center">
				<p className="h5">Dados do Usuário</p>
			</div>
			<label className="col h6 ">Nome:</label>
				<input type="text" className=" input w-100" name="nome" value={this.state.valueNome} onChange={this.handleChange} />
			<label className="col h6 ">Email:</label>
				<input type="email" className=" input w-100" name="email" value={this.state.valueEmail} onChange={this.handleChange} />
			<label className="col h6 ">Senha:</label>
				<input type="password" className=" input w-100" name="senha" value={this.state.valueSenha} onChange={this.handleChange} />
			<label className="col h6 ">Confirmar Senha:</label>
				<input type="password" className=" input w-100" name="confirmar-senha" value={this.state.valueConfirmarSenha} onChange={this.handleChange} />
			<label className="col h6 ">Sexo:</label>
				<select className="col col-lg-3" name="sexo" onChange={this.handleChange} >
					<option disabled selected value></option>
					<option value="m">Masculino</option>
					<option value="f">Feminino</option>
					<option value="o">Outro</option>
				</select>
			<label className="col h6 ">CPF:</label>
				<input type="number" className=" input w-100" name="cpf" value={this.state.valueCPF} onChange={this.handleChange} />
			<label className="col h6 ">Data de Nascimento:</label>
				<input type="date" className=" input w-100 col col-lg-7" name="data" value={this.state.valueNascimento} onChange={this.handleChange} />
			<label className="col h6 ">Foto:</label>
				<input type="file" className=" input w-100" name="foto" accept="image/*" value={this.state.valueFoto} onChange={this.handleChange} />
			<label className="col h6 ">Telefone:</label>
				<input type="tel" className=" input w-100" name="telefone" value={this.state.valueTelefone} onChange={this.handleChange} />
		</div>

		<div className="col col-lg-5 col-sm-12 w-100 bg-light mx-lg-auto py-3 my-2">
			<div className=" w-100 mx-auto my-4 text-center">
				<p className="h5">Endereço do Usuário</p>
			</div>
			<label className="col h6 ">Endereço:</label>
				<input type="text" className=" input w-100" name="endereco" value={this.state.valueEndereco} onChange={this.handleChange}/>
			<label className="col h6 ">Número:</label>
				<input type="number" className=" input w-100" name="numero" value={this.state.valueNumero} onChange={this.handleChange}/>
			<label className="col h6 ">CEP:</label>
				<input type="number" className=" input w-100" name="cep" value={this.state.valueCEP} onChange={this.handleChange}/>
			<label className="col h6 ">Complemento:</label>
				<input type="text" className=" input w-100" name="complemento" value={this.state.valueComplemento} onChange={this.handleChange}/>
			<label className="col h6 ">Bairro:</label>
				<input type="text" className=" input w-100" name="bairro" value={this.state.valueBairro} onChange={this.handleChange}/>
			<label className="col h6 ">Cidade:</label>
				<input type="text" className=" input w-100" name="cidade" value={this.state.valueCidade} onChange={this.handleChange}/>
			<label className="col h6 ">Estado:</label>
				<input type="text" className=" input w-100" name="estado" value={this.state.valueEstado} onChange={this.handleChange}/>
			<label className="col  h6 ">Referência:</label>
			<textarea type="text" className=" input w-100" name="referencia" value={this.state.valueReferencia} onChange={this.handleChange}></textarea>
			
		</div>
		<div className=" w-100 mx-auto text-center my-4">
			<input className="btn btn-success " type="submit" value="Cadastrar Usuário" id="envio"/>
		</div>

		</form>
		</div>
		);
	}
}

export default CadastroUsuario;
import React,{ Component} from 'react'
import {fetchRepos} from '../../service/repos.api'

class ReposContainer extends Component{

	constructor(props){

		super(props)

		this.state = {
			repos:[]
		} 

	}

	componentDidMount(){
		fetchRepos('ederrr/repos').then(res => this.setState({repos: res.data}))
	}

	render(){
		return(
			<div>

			<ul>

			{this.state.repos.map(repo => (

				<li key={repo.id}>{repo.name}</li>

			))}

			</ul>

			</div>

		);
	}

}

export default ReposContainer;
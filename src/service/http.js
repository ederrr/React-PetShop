import axios from 'axios'
import pouchdb from 'pouchdb'

export const http = axios.create({

	//baseURL: 'https://my-json-server.typicode.com/ederrr/ReactPetShop/'
	//baseURL: 'http://localhost:3001'
	baseURL: 'http://localhost:5984/petshop/_design/produto/_view/'
})

export var db = new pouchdb('teste');

export var remote = new pouchdb('http://localhost:5984/petshop/');
import pouchdb from 'pouchdb'

export var petshop = new pouchdb('http://localhost:5984/petshop/');
export var servicos = new pouchdb('http://localhost:5984/servicos/');
export var usuarios = new pouchdb('http://localhost:5984/usuarios/');
export var pets = new pouchdb('http://localhost:5984/pets/');

export default function admin(state = [], action){

	switch(action.type){
		case 'FAZ_LOGIN':
			return {id:action.id, logado: action.logado, admin: action.admin}

		default:
			return state;
	}
	
}
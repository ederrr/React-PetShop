export function fazLogin(logado, id, admin){
	return{
		type: 'FAZ_LOGIN',
		logado,
		id,
		admin
	}
}
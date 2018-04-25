import {http} from './http'

export const buscaCategoria = (local,categoria) => http.get(`${local}`,{params: {
      categoria: `${categoria}`
    }
  })

export const buscaID = (local,id) => http.get(`${local}`,{params: {
      id: `${id}`
    }
  })
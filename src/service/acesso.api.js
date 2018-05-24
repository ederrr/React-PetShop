import {http} from './http'

export const buscaCategoria = (local,categoria) => http.get(`${local}`,{params: {
      categoria: `${categoria}`
    }
  })

export const buscaID = (local,id) => http.get(`${local}`,{params: {
      id: `${id}`
    }
  })

export const buscaNome = (local,nome) => http.get(`${local}`,{params: {
      nome: `${nome}`
    }
  })

export const criaProduto = (p) => http.post("produto", { 
  id: `${p.id}`,
  nome: `${p.nome}`,
  preco: `${p.preco}`,
  descricao: `${p.descricao}`,
  imagem: `${p.imagem}`,
  categoria: `${p.categoria}`
});
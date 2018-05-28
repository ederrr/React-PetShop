import {http} from './http'

export const buscaCategoria = (local,categoria) => http.get(`${local}`,{params: {
      categoria: `${categoria}`
    }
  })

export const buscaID = (local,id) => http.get(`${local}`,{params: {
      id: id
    }
  })

export const buscaIDVetor = (local,id) => http.get(`${local}`,{params: {
      id: id
    }
  })


export const buscaNome = (local,nome) => http.get(`${local}`,{params: {
      nome: `${nome}`
    }
  })

export const criaProduto = (p) => http.post("produto", { 

id: p.id,
nome:p.nome,
preco: p.preco,
imagem: [p.imagem0,p.imagem1,p.imagem2,p.imagem3],
categoria: p.categoria,
informacoes:[
      {nome:"marca",descricao: p.marca},
      {nome:"peso",descricao: `${p.peso}${p.upeso}`},
      {nome:"embalagem",descricao: p.embalagem},
      {nome:"dimensao",descricao: `${p.altura}${p.ualtura}x${p.largura}${p.ulargura}x${p.comprimento}${p.ucomprimento}`},
      {nome:"quantidade",descricao: p.quantidade},
      {nome:"descricao",descricao: p.descricao}
]
})

//Usuario

export const login = (local,email,senha) => http.get(`${local}`,{params: {
      email: `${email}`,
      senha: `${senha}`
    }
  })

export const criaUsuario = (u) => http.post("usuario", { 

      id: u.id,
      admin: u.admin,
      nome: u.nome,
      email: u.email,
      senha: u.senha,
      sexo: u.sexo,
      cpf: u.cpf,
      data: u.nascimento,
      foto: u.foto,
      telefone: u.telefone,
      pets: [],
      comprasprodutos: [],
      comprasservicos: [],
      endereco: u.endereco,
      numero: u.numero,
      complemento: u.complemento,
      bairro: u.bairro,
      cidade: u.cidade,
      estado: u.estado,
      referencia: u.referencia,
})


//Servicos

export const buscaServico = (local,categoria) => http.get(`${local}`)

export const buscaServicoPet = (local,pet) => http.get(`${local}`,{params: {
      pet: `${pet}`
    }
  })
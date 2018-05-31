import {http} from './http'

export const buscaCategoria = (local,categoria) => http.get(`${local}`,{params: {
      categoria: categoria
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
      nome: nome
    }
  })

export const removeID = (local,id) => http.delete(`${local}/${id}`)

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
      referencia: u.referencia
})


//Servicos

export const buscaServico = (local,categoria) => http.get(`${local}`)

export const buscaServicoPet = (local,pet) => http.get(`${local}`,{params: {
      pet: `${pet}`
    }
  })

export const criaServico = (s) => http.post("servico", { 

      id: s.id,
      nome: s.nome,
      imagem: s.foto,
      preco: {
        descricao: "Valor especificado dependendo da espécie e raça do animal.",
        preco: s.preco
      },
      descricao: s.descricao
})


//Pet

export const criaPet = (p) => http.post("pet", { 

      id: p.id,
      nome: p.nome,
      sexo: p.sexo,
      foto: p.foto,
      tipo: p.tipo,
      peso: `${p.peso}Kg`,
      raca: p.raca,
      pelagem: p.pelagem,
      rga: p.rga,
      porte: p.porte,
      nascimento: p.nascimento,
      observacao: p.observacao
})

//Compra Produtos

export const compraProduto = (cp) => http.post("compraproduto", { 

      id: cp.id,
      nome: cp.nome,
      comprador: cp.comprador,
      data: new Date(),
      quantidade: cp.quantidade,
      valor: cp.valor

})

//Compra Servicos

export const compraServico = (cs) => http.post("compraservico", { 

      id: cs.id,
      nome: cs.nome,
      pet: cs.pet,
      datacompra: new Date(),
      dataservico: cs.data,
      horaservico: cs.hora,
      valor: cs.preco.preco
})
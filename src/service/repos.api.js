import {http} from './http'
import React from 'react'

export const fetchRepos = (local,categoria) => http.get(`${local}`,{params: {
      categoria: `${categoria}`
    }
  })
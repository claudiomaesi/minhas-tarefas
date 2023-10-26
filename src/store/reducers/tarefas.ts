import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Tarefa from '../../models/Tarefa'

import * as enums from '../../utils/enums/Tarefa'

type TarefasState = {
  itens: Tarefa[]
}

const initialState: TarefasState = {
  itens: [
    {
      id: 1,
      titulo: 'Estudar Javascript',
      descricao: 'Rever exercícip do módulo 7',
      prioridade: enums.Prioridade.NORMAL,
      status: enums.Status.CONCLUIDA
    },
    {
      id: 2,
      titulo: 'Estudar TypeScript',
      descricao: 'Estudar material de apoio',
      prioridade: enums.Prioridade.NORMAL,
      status: enums.Status.PENDENTE
    },
    {
      id: 3,
      titulo: 'Estudar Bootstrap',
      descricao: 'Praticar a construção de uma land page',
      prioridade: enums.Prioridade.IMPORTANTE,
      status: enums.Status.PENDENTE
    }
  ]
}

const tarefasSlice = createSlice({
  name: 'tarefas',
  initialState: initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter((tarefa) => tarefa.id !== action.payload)
    },

    editar: (state, action: PayloadAction<Tarefa>) => {
      const indexDatarefa = state.itens.findIndex(
        (t) => t.id === action.payload.id
      )

      if (indexDatarefa >= 0) {
        state.itens[indexDatarefa] = action.payload
      }
    }
  }
})

export const { remover, editar } = tarefasSlice.actions

export default tarefasSlice.reducer

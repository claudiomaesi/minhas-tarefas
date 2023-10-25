import Tarefa from '../../../components/FiltroCard/Tarefa'
import { Container } from './styles'

import * as enums from '../../../utils/enums/Tarefa'

const tarefas = [
  {
    titulo: 'Estudar TypeScript',
    descricao: 'Ver a aula 3 da EBAC',
    prioridade: enums.Prioridade.IMPORTANTE,
    status: enums.Status.PENDENTE
  },
  {
    titulo: 'Estudar React',
    descricao: 'Ver a aula 1 da EBAC',
    prioridade: enums.Prioridade.URGENTE,
    status: enums.Status.CONCLUIDA
  },
  {
    titulo: 'Ir para a academia',
    descricao: 'Fazer treino B',
    prioridade: enums.Prioridade.IMPORTANTE,
    status: enums.Status.PENDENTE
  }
]

const ListaDeTarefas = () => (
  <Container>
    <p>2 tarefas marcadas como: categoria e termo</p>
    <ul>
      {tarefas.map((trf) => (
        <li key={trf.titulo}>
          <Tarefa
            descricao={trf.descricao}
            titulo={trf.titulo}
            prioridade={trf.prioridade}
            status={trf.status}
          />
        </li>
      ))}
    </ul>
  </Container>
)

export default ListaDeTarefas

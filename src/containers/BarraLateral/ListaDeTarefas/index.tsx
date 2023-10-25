import { useSelector } from 'react-redux'

import { Container } from './styles'
import Tarefa from '../../../components/FiltroCard/Tarefa'

import { RootReducer } from '../../../store'

const ListaDeTarefas = () => {
  const { tarefas } = useSelector((state: RootReducer) => state)

  return (
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
}

export default ListaDeTarefas

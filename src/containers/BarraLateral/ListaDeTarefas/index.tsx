import { useSelector } from 'react-redux'

import { Container } from './styles'
import Tarefa from '../../../components/FiltroCard/Tarefa'

import { RootReducer } from '../../../store'

const ListaDeTarefas = () => {
  const { itens } = useSelector((state: RootReducer) => state.tarefas)

  return (
    <Container>
      <p>2 tarefas marcadas como: categoria e termo</p>
      <ul>
        {itens.map((trf) => (
          <li key={trf.titulo}>
            <Tarefa
              id={trf.id}
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

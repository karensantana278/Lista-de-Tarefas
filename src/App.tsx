import {useState} from 'react'
import * as C from './App.Styles'
import {Item} from './types/item'
import {ListItem} from './components/ListItem'

const App = () => {
  const [list, setList] = useState<Item[]>([
    { id: 1, name: 'Terminar Curso de React', done: false },
    { id: 2, name: 'Criar projeto Portfólio', done: true },
  ])

  return (
    <C.Container>
      <C.Area>
        <C.Header>ToDo List</C.Header>

        {/*Área para adicionar nova tarefa */}

        {list.map((item, index) => (
          <ListItem key={index} item={item}/>
        ))}
      </C.Area>
    </C.Container>
  );
}
export default App;
import { useState } from 'react' 
import './App.css'
import {Todos} from "./components/Todos"
import {CreateTodo} from "./components/CreateTodo"



function App() {
  const [todos, setTodos] = useState([])

  return (
    <div>
      <CreateTodo></CreateTodo>
      <Todos todos={todos}></Todos>
    </div>
  )
}

export default App

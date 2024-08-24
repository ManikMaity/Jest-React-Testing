import { useState } from 'react';
import './App.css'
import Todo from './components/Todo/Todo'

function App() {
  const [todos, setTodos] = useState([
    {id: 1, text: "Do sanket sir's assignment", isComplete: false},
    {id: 2, text: "Start a react project", isComplete: false}
  ]);

  return (
    <>
     <Todo todos={todos} setTodos={setTodos}/>
    </>
  )
}

export default App

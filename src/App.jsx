import { useState } from 'react';
import './App.css'
import TodoApp from './components/TodoApp';

function App() {
  const [todos, setTodos] = useState([
    {id: 1, text: "Do sanket sir's assignment", isComplete: false},
    {id: 2, text: "Start a react project", isComplete: true}
  ]);

  return (
    <>
     <TodoApp todos={todos} setTodos={setTodos}/>
    </>
  )
}

export default App

import React, { useState } from 'react';


const style ={
  display : "flex"
}

function Todo({todos, setTodos}) {
  const [input, setInput] = useState('');

  function addTodo (e){
    e.preventDefault();
    setTodos([...todos, {id: todos.length+1, text:input, isComplete:false}]);
    setInput("");
  }
  
  return (
  <div>
    <form>
      <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder='Enter todo here...'/>
      <button type='submit' onClick={addTodo} className="Add">Add</button>
    </form>

    <ul>
      {todos && todos.map(todo => {
        return <li key={todo.id} style={style}>
          <input type="checkbox" checked={todo.isComplete} />
          <p>{todo.text}</p>
        </li>
      })}
    </ul>
  </div>
  )
}

export default Todo;

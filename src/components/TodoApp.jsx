import React, { useState } from 'react'
import TodoItem from './TodoItem'

function TodoApp({todos, setTodos}) {

    const [inputText, setInputText] = useState("");

    function addTodo(e){
        e.preventDefault();
        if(inputText == "") return;
        const todoObj = {id: todos.length + 1, text: inputText, isComplete : false};
        setTodos([...todos, todoObj]);
        setInputText("");
    }

  return (
    <div>
        <form>
            <input type="text" value={inputText} onChange={(e) => setInputText(e.target.value)} placeholder='Add Todo'/>
            <button type="submit" onClick={addTodo}>Add</button>
        </form>
        <div>
            {todos && todos.map((todos) => <TodoItem data={todos} key={todos.id}/>)}
        </div>
      
    </div>
  )
}

export default TodoApp

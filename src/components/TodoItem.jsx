import React from 'react'

function TodoItem({data}) {
    let {id, text, isComplete} = data;
    
  return (
    <div data-testid={`todo-${id}`}>
      {isComplete ? <strike>{text}</strike> : <p>{text}</p>}
    </div>
  )
}

export default TodoItem

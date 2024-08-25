import React from 'react';
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import TodoItem from '../components/TodoItem';
import TodoApp from '../components/TodoApp';

afterEach(() =>{
  cleanup();
})

test("Should render non-completed todoItem", () => {
  const todo1 = {id: 1, text: "Do sanket sir's assignment", isComplete: false};
  render(<TodoItem data={todo1}/>);
  const todoElement = screen.getByTestId(`todo-1`);
  expect(todoElement).toBeInTheDocument();
  expect(todoElement).toHaveTextContent("Do sanket sir's assignment");
});

test("Should render completed todoItem", () => {
  const todo = {id: 2, text: "Start a react project", isComplete: true};
  render(<TodoItem data={todo}/>);
  const todoElement = screen.getByTestId(`todo-2`);
  expect(todoElement).toBeInTheDocument();
  expect(todoElement).toHaveTextContent("Start a react project");
});


test("Add Todo working", () => {
  const todos = [];
  const setTodos = jest.fn();

  render(<TodoApp todos={todos} setTodos={setTodos} />);

  const inputElement = screen.getByPlaceholderText('Add Todo');
  const buttonElement = screen.getByText('Add');

  fireEvent.change(inputElement, { target: { value: 'Test Todo' } });
  fireEvent.click(buttonElement);

  expect(setTodos).toHaveBeenCalledWith([{ id: 1, text: 'Test Todo', isComplete: false }]);

  expect(inputElement.value).toBe('');
})


import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Todo from '../components/Todo';

test('renders Todo component', () => {
  render(<Todo />);
  expect(screen.getByText('Todo List')).toBeInTheDocument();
});

test('adds a new todo item', () => {
  render(<Todo />);
  fireEvent.change(screen.getByPlaceholderText('Add a todo'), { target: { value: 'Learn Jest' } });
  fireEvent.click(screen.getByText('Add Todo'));
  expect(screen.getByText('Learn Jest')).toBeInTheDocument();
});

test('clears input after adding a todo', () => {
  render(<Todo />);
  const input = screen.getByPlaceholderText('Add a todo');
  fireEvent.change(input, { target: { value: 'Learn Jest' } });
  fireEvent.click(screen.getByText('Add Todo'));
  expect(input.value).toBe('');
});

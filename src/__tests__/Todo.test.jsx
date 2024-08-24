import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Todo from '../components/Todo/Todo';

test("Should render todo component", () => {
  render(<Todo/>);
  const todoElement = screen.getByTestId("todo1");
  expect(todoElement).toBeInTheDocument();
  expect(todoElement).
});


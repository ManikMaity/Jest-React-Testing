### Step-by-Step Guide: Setting Up Jest with Vite and React

#### Step 1: Create a Vite React Project
1. **Initialize the Project:**
   Use Vite to create a new React project.

   ```bash
   npm create vite@latest my-vite-react-app --template react
   cd my-vite-react-app
   ```

2. **Install Dependencies:**
   Install the necessary dependencies, including Jest, Babel, and Testing Library.

   ```bash
   npm install --save-dev jest @babel/preset-env @babel/preset-react @testing-library/react @testing-library/jest-dom jest-environment-jsdom babel-jest identity-obj-proxy
   ```

#### Step 2: Configure Babel
1. **Create `babel.config.cjs`:**
   Configure Babel to work with React and Jest.

   **`babel.config.cjs`**:

   ```javascript
   module.exports = {
     presets: [
       '@babel/preset-env',
       '@babel/preset-react',
     ],
   };
   ```

   The `.cjs` extension ensures that this file is treated as a CommonJS module, which is compatible with Jest.

#### Step 3: Configure Jest
1. **Create `jest.config.cjs`:**
   Set up Jest configuration to work with Vite, React, and Babel.

   **`jest.config.cjs`**:

   ```javascript
   module.exports = {
     testEnvironment: 'jest-environment-jsdom',
     transform: {
       '^.+\\.jsx?$': 'babel-jest', // Transforms JavaScript and JSX files using Babel
     },
     moduleNameMapper: {
       '\\.(css|less|scss)$': 'identity-obj-proxy', // Mock CSS imports
     },
     setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'], // Setup file for Jest DOM
     testMatch: ['**/__tests__/**/*.test.jsx'], // Pattern to find test files
     moduleDirectories: ['node_modules', 'src'], // Allow absolute imports from 'src'
   };
   ```

2. **Create `setupTests.js`:**
   Initialize additional setups like `jest-dom` in your `src` directory.

   **`src/setupTests.js`**:

   ```javascript
   import '@testing-library/jest-dom';
   ```

#### Step 4: Write a Test for a Todo Component
1. **Create the `Todo.jsx` Component:**
   Write a simple Todo component in `src/components/Todo.jsx`.

   **`src/components/Todo.jsx`**:

   ```javascript
   import React, { useState } from 'react';

   function Todo() {
     const [todos, setTodos] = useState([]);
     const [input, setInput] = useState('');

     const addTodo = () => {
       setTodos([...todos, input]);
       setInput('');
     };

     return (
       <div>
         <h1>Todo List</h1>
         <input 
           value={input} 
           onChange={(e) => setInput(e.target.value)} 
           placeholder="Add a todo"
         />
         <button onClick={addTodo}>Add Todo</button>
         <ul>
           {todos.map((todo, index) => (
             <li key={index}>{todo}</li>
           ))}
         </ul>
       </div>
     );
   }

   export default Todo;
   ```

2. **Create a Test File:**
   Write tests for the `Todo` component in `src/__tests__/Todo.test.jsx`.

   **`src/__tests__/Todo.test.jsx`**:

   ```javascript
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
   ```

#### Step 5: Run the Tests
1. **Add a Test Script to `package.json`:**
   Update the `scripts` section to include a test command.

   **`package.json`**:

   ```json
   {
     "scripts": {
       "test": "jest"
     }
   }
   ```

2. **Run the Tests:**

   Execute the tests using the command:

   ```bash
   npm test
   ```

#### Step 6: Verify Test Results
Ensure all tests pass:

```bash
PASS  src/__tests__/Todo.test.jsx
  √ renders Todo component (70 ms)
  √ adds a new todo item (47 ms)
  √ clears input after adding a todo (20 ms)

Test Suites: 1 passed, 1 total
Tests:       3 passed, 3 total
Snapshots:   0 total
Time:        6.184 s
Ran all test suites.
```

### Summary

- **Project Setup:** Create a new Vite React project and install necessary dependencies.
- **Babel Configuration:** Set up Babel using a CommonJS configuration.
- **Jest Configuration:** Configure Jest to work with React, Babel, and CSS modules.
- **Component and Tests:** Write a simple React component and corresponding unit tests.
- **Run Tests:** Execute the tests and verify they pass successfully.

#### Folder structure for a Vite React project with Jest for unit testing, including a sample Todo application -


```
my-vite-react-app/
├── src/                   # Source code
│   ├── components/        # React components
│   │   └── Todo.jsx        # Example Todo component
│   ├── __tests__/         # Test files
│   │   └── Todo.test.jsx   # Tests for the Todo component
│   ├── setupTests.js      # Jest setup file for additional configurations
│   ├── App.jsx            # Main App component
│   └── main.jsx           # Entry point for React
├── .gitignore             # Git ignore file
├── babel.config.cjs       # Babel configuration file
├── jest.config.cjs        # Jest configuration file
├── package.json           # Project metadata and dependencies
└── vite.config.js         # Vite configuration file
```
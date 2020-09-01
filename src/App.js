import React from 'react';
import './App.css';

import todos from './api/todos';
import users from './api/users';
import { TodoList } from './components/TodoList';

function App() {
  return (
    <div className="App">
      <h1>Static list of todos</h1>
      <p>
        <span>Todos: </span>
        {todos.length}
      </p>

      <p>
        <span>Users: </span>
        {users.length}
      </p>
      <TodoList list={preparedTodos} />
    </div>
  );
}

const preparedTodos = todos.map(todo => users.reduce((acc, user) => {
  let obj = acc;

  if (todo.userId === user.id) {
    obj = {
      ...todo, user,
    };
  }

  return obj;
}, {}));

export default App;

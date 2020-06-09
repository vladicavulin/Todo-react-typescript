import React, { useState } from 'react';
import { TodoList } from './TodoList' 
import { AddTodoForm } from './AddTodoForm'

const initialTodos: Array <Todo> = [
  { text:"Walk the dog", complete:true },
  { text:"Write an app", complete: false }
];

export const App: React.FC = () => {
const [todos, setTodos] = useState(initialTodos)

const toggleTodo: ToggleTodo = selectedTodo => {
  const newTodos = todos.map(todo => {
    if(todo === selectedTodo) {
      return {
        ...todo,
        complete: !todo.complete
      };
    }
    return todo;
  });
  setTodos(newTodos);
}

  return (
  <React.Fragment>
  <TodoList todos={todos} toggleTodo={toggleTodo}/>
  <AddTodoForm/>
  </React.Fragment>
  )
}

export default App;

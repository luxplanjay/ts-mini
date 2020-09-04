import React, { useState } from 'react';
import shortid from 'shortid';
import TodoList from './TodoList';
import TodoEditor from './TodoEditor';
import Filter from './Filter';
import Stats from './Stats';
import initialTodos from './todos.json';

const barStyles = {
  display: 'flex',
  alignItems: 'flex-end',
  marginBottom: 20,
};

const TodosView = () => {
  const [todos, setTodos] = useState(initialTodos);
  const [filter, setFilter] = useState('');

  const addTodo = text => {
    const todo = {
      id: shortid.generate(),
      text,
      completed: false,
    };

    setTodos(todos => [todo, ...todos]);
  };

  const deleteTodo = todoId => {
    setTodos(todos => todos.filter(todo => todo.id !== todoId));
  };

  const toggleCompleted = todoId => {
    setTodos(todos =>
      todos.map(todo =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  };

  const changeFilter = filter => {
    setFilter(filter);
  };

  const getVisibleTodos = () => {
    const normalizedFilter = filter.toLowerCase();

    return todos.filter(todo =>
      todo.text.toLowerCase().includes(normalizedFilter),
    );
  };

  const calculateCompletedTodos = () => {
    return todos.reduce(
      (total, todo) => (todo.completed ? total + 1 : total),
      0,
    );
  };

  const completedTodoCount = calculateCompletedTodos();
  const visibleTodos = getVisibleTodos();

  return (
    <>
      <TodoEditor onSubmit={addTodo} />

      <div style={barStyles}>
        <Filter value={filter} onChange={changeFilter} />
        <Stats total={todos.length} completed={completedTodoCount} />
      </div>

      <TodoList
        todos={visibleTodos}
        onDeleteTodo={deleteTodo}
        onToggleCompleted={toggleCompleted}
      />
    </>
  );
};

export default TodosView;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Todo from './Todo';

const Todos = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    async function getTodos() {
      const { data } = await axios.get('/api/todos');
      setTodos(data);
    }
    getTodos();
  }, []);

  async function updateTodo(id, newVal) {
    let { data } = await axios.put(`/api/todos/${id}`, { newVal });
    setTodos(data);
  }

  return (
    <div>
      {todos.map(t => {
        return <Todo key={t.id} {...t} updateTodo={updateTodo} />;
      })}
    </div>
  );
};

export default Todos;

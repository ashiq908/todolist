import { useState } from 'react';
import './App.css';

const App = () => {
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [editInput, setEditInput] = useState('');

  const addTodo = () => {
    if (input !== '') {
      setTodos([...todos, input]);
      setInput('');
    }
  };

  const startEditing = (id, currentTodo) => {
    setEditIndex(id);
    setEditInput(currentTodo);
  };

  const saveEdit = (id) => {
    editTodo(editInput, id);
    setEditIndex(null); // Exit edit mode
  };

  const editTodo = (upTodo, id) => {
    const updatedTodos = todos.map((todo, index) =>
      index === id ? upTodo : todo
    );
    setTodos(updatedTodos);
  };

  const deleTodo = (id) => {
    setTodos(todos.filter((todo, index) => index !== id));
  };

  return (
    <div className='App'>
      <h1>To-do App</h1>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder='To-do'
        maxLength={10}
      />
      <button onClick={addTodo}>Add</button>
      <ul>
        {todos.map((todo, id) => (
          <li key={id}>
            {editIndex === id ? (
              <input
                value={editInput}
                onChange={(e) => setEditInput(e.target.value)}
              />
            ) : (
              <span>{todo}</span>
            )}

            {editIndex === id ? (
              <button onClick={() => saveEdit(id)}>Save</button>
            ) : (
              <button onClick={() => startEditing(id, todo)}>Edit</button>
            )}

            <button onClick={() => deleTodo(id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;

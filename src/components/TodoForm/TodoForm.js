import { useState } from 'react';
import { useCreateTodoMutation } from '../../features/api/apiSlice';

import './TodoForm.css';

const TodoForm = () => {
  const [newTodo, setNewTodo] = useState('');

  const [createTodo] = useCreateTodoMutation();

  const inputChangeHandler = e => {
    const value = e.target.value;

    setNewTodo(value);
  };

  const handleSubmit = () => {
    createTodo({ userId: 1, title: newTodo, completed: false });
    setNewTodo('');
  };

  return (
    <form onSubmit={e => handleSubmit(e)} className="form">
      <label htmlFor="name" className="form-label">
        Todo Name
      </label>
      <div className="form-grid">
        <input
          type="text"
          id="name"
          placeholder="What are you doing today?"
          className="form-input"
          onChange={e => inputChangeHandler(e)}
        />
        <button className="form-btn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="30"
            height="30"
            viewBox="0 0 30 30"
          >
            <path d="M 26.980469 5.9902344 A 1.0001 1.0001 0 0 0 26.292969 6.2929688 L 11 21.585938 L 4.7070312 15.292969 A 1.0001 1.0001 0 1 0 3.2929688 16.707031 L 10.292969 23.707031 A 1.0001 1.0001 0 0 0 11.707031 23.707031 L 27.707031 7.7070312 A 1.0001 1.0001 0 0 0 26.980469 5.9902344 z"></path>
          </svg>
        </button>
      </div>
    </form>
  );
};

export default TodoForm;

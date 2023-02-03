import TodoForm from '../TodoForm/TodoForm';
import Skeleton from 'react-loading-skeleton';
import TodoListItem from '../TodoListItem/TodoListItem';
import { useGetTodosQuery } from '../../features/api/apiSlice';

import './TodoList.css';

const LoadingList = () => {
  const items = Array(8).fill({});

  return items.map((item, idx) => {
    return (
      <div className="todo-item">
        <div style={{ flex: '1' }}>
          <Skeleton className="sk-text" />
        </div>
        <div style={{ display: 'flex' }}>
          <Skeleton containerClassName="sk-del-btn" />
        </div>
      </div>
    );
  });
};

const TodoList = () => {
  const { data: todos, isLoading, isSuccess, isError } = useGetTodosQuery();

  let content = '';

  if (isLoading) {
    content = <LoadingList />;
  }

  if (isSuccess) {
    content = todos.map((todo, idx) => {
      return <TodoListItem key={idx} todo={todo} />;
    });
  }

  if (isError) {
    content = <p>Failed to load todos</p>;
  }

  return (
    <div className="todo-list">
      <h2>My Todos</h2>
      <TodoForm />
      <div className="todo-content">{content}</div>
    </div>
  );
};

export default TodoList;

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTodo, toggleComplete } from '../features/todo/todoSlice';

const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleToggle = (id) => {
    dispatch(toggleComplete(id));
  };

  const completedCount = todos.filter(todo => todo.completed).length;

  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} className={todo.completed ? 'completed' : ''}>
            {todo.text}
            <div>
              <button className="complete" onClick={() => handleToggle(todo.id)}>
                {todo.completed ? 'Undo' : 'Complete'}
              </button>
              <button className="delete" onClick={() => handleDelete(todo.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
      <div className="completed-count">
        {`Total Completed Items: ${completedCount}`}
      </div>
    </div>
  );
};

export default TodoList;

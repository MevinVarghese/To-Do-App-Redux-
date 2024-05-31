import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './App.css'

const App = () => (
  <Provider store={store}>
    <div className='container'>
      <h3 className='heading'>ToDo App</h3>
      <TodoForm />
      <TodoList />
    </div>
  </Provider>
);

export default App;

import React, { useReducer, Fragment } from 'react';
import { initialState, reducer } from '../../reducers/todo.reducer.js';
import Todo from './Todo.jsx';
import AddTodo from './AddTodo.jsx';
import './style.scss';

const TodoApp = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Fragment>
      <AddTodo add={text => dispatch({ type: 'add', text: text })} />
      {state.todos.map(t => (
        <Todo
          key={t.id}
          todo={t}
          remove={() => dispatch({ type: 'remove', id: t.id })}
          edit={text => dispatch({ type: 'edit', id: t.id, text: text })}
        />
      ))}
    </Fragment>
  );
};
export default TodoApp;

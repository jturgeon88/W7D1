import React from 'react';
import TodoList from './todo_list'

const toggleDone = (todo, receiveTodo) => {
  todo.done = !todo.done;
  receiveTodo(todo);
};

const doneButtonTextifier = (todo) => {
  return todo.done ? "Undo" : "Done";
};

class TodoListItem extends React.Component {


  render () {
    const { todo, receiveTodo, removeTodo } = this.props;
    const title = this.props.todo.title;
    return (
      <div>
        <li>
          {title}
        </li>
        <button onClick={() => toggleDone(todo, receiveTodo)}>
          {doneButtonTextifier(todo)}
        </button>
        <button
          className="delete-button"
          onClick={() => removeTodo(todo)}>Delete Todo</button>
      </div>
    );
  }
}

export default TodoListItem;

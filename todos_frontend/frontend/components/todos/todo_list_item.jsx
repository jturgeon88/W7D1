import React from 'react';
import TodoList from './todo_list'

class TodoListItem extends React.Component {
  render () {
    const { todo, removeTodo } = this.props;
    const title = this.props.todo.title;
    return (
      <div>
        <li>
          {title}
        </li>
        <button
          className="delete-button"
          onClick={() => removeTodo(todo)}>Delete Todo</button>
      </div>
    );
  }
}

export default TodoListItem;

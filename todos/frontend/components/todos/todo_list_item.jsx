import React from 'react';
import TodoList from './todo_list'

class TodoListItem extends React.Component {
  render () {
    const title = this.props.todo.title;
    return (
      <li>
        {title}
      </li>
    );
  }
}

export default TodoListItem;

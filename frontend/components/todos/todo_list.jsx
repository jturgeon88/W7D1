import React from 'react';
import TodoListItem from './todo_list_item';
// Components

class TodoList extends React.Component {

  render() {
    const todos = this.props.todos;
    const todoListItems = todos.map(todo => (
      <TodoListItem
        key={`todo-list-item${todo.id}`}
        todo={todo} />
    ));

    return(
      <div>
        <ul>
          {todoListItems}
        </ul>
      </div>
    );
  }
}

export default TodoList;

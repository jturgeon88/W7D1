import React from 'react';
import TodoList from './todo_list';
import merge from 'lodash/merge';

class TodoListItem extends React.Component {
  constructor(props) {
  super(props);

  this.toggleTodo = this.toggleTodo.bind(this);
  }

  toggleTodo(e) {
    e.preventDefault();
    const toggledTodo = merge({}, this.props.todo, {
      done: !this.props.todo.done
    });
    this.props.updateTodo(toggledTodo);
  }

  render () {
    const { todo, updateTodo, deleteTodo } = this.props;
    const { title, done } = todo;
    return (
      <div>
        <li>
          {title}
        </li>
        <button
          className={done ? "done" : "undone"}
          onClick={this.toggleTodo}>
          {done ? "Undo" : "Done"}
        </button>
        <button
          className="delete-button"
          onClick={() => deleteTodo(todo)}>Delete Todo</button>
      </div>
    );
  }
}

export default TodoListItem;

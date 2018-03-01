import React from 'react';
// Components
import TodoListItem from './todo_list_item';
import TodoForm from './todo_form';

class TodoList extends React.Component {

  render() {
    const { todos, receiveTodo } = this.props;
    const todoListItems = todos.map(todo => (
      <TodoListItem
        key={`todo-list-item${todo.id}`}
        todo={todo} />
    ));

    return(
      <div>
        <ul className="todo-list">
          {todoListItems}
        </ul>
        <TodoForm receiveTodo={ receiveTodo }/>
      </div>
    );
  }
}

export default TodoList;

import React from 'react';
// Components
import TodoListItem from './todo_list_item';
import TodoForm from './todo_form';

class TodoList extends React.Component {
  componentDidMount() {
    this.props.requestTodos();
  }

  render() {
    const { todos, updateTodo, createTodo, deleteTodo, errors } = this.props;
    const todoListItems = todos.map(todo => (
      <TodoListItem
        key={`todo-list-item${todo.id}`}
        todo={todo}
        updateTodo={ updateTodo }
        deleteTodo={ deleteTodo } />
    ));

    return(
      <div>
        <TodoForm createTodo={ createTodo } errors={ errors }/>
        <ul className="todo-list">
          {todoListItems}
        </ul>
      </div>
    );
  }
}

export default TodoList;

import React from 'react';
// Components

class TodoList extends React.Component {

  render() {
    const todos = this.props.todos;
    const titles = todos.map(todo => (
      <li>{todo.title}</li>
    ));

    return(
      <div>
        <ul>
          {titles}
        </ul>
        <h3></h3>
      </div>
    );
  }
}

export default TodoList;

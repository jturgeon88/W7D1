import React from 'react';
import ErrorList from './error_list';
import { uniqueId } from '../../util/id_generator';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
      done: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(property) {
    return e => this.setState({ [property]: e.target.value });
  }

  //NOTE: the receiveTodo function is being passed in to this form through props (would need to happen when the
  // component is called in todo_list.jsx)
  handleSubmit(e) {
    e.preventDefault();
    const todo = Object.assign({}, this.state, { id: uniqueId() });
    this.props.createTodo({ todo }).then(
      () => this.setState({
        title: "",
        body: ""
      })
    );
  }

  render () {
    return (
      <form className="todo-form" onSubmit={ this.handleSubmit }>
        <ErrorList errors={ this.props.errors } />
        <label>Title:
          <input
            className="input"
            ref="title"
            value={ this.state.title }
            placeholder="buy milk"
            onChange={ this.update('title') }
            />
        </label>
        <label>Body:
          <textarea
            className="input"
            ref="body"
            cols='20'
            value={ this.state.body }
            rows='5'
            placeholder="2% or whatever is on sale!"
            onChange={ this.update('body') }
            ></textarea>
        </label>
        <button className="create-button">Create Todo!</button>
      </form>
    );
  }
}

export default TodoForm;

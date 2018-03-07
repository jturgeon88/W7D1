import React from 'react';
import { uniqueId } from '../../util/id_generator';
import ErrorList from './error_list';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: '',
      done: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(property) {
    return (event => this.setState({[property]: event.currentTarget.value}));
  }

  //NOTE: the receiveTodo function is being passed in to this form through props (would need to happen when the
  // component is called in todo_list.jsx)
  handleSubmit(event) {
    event.preventDefault();
    const todo = Object.assign({}, this.state, { id: uniqueId() });     //THis creates a new todo object and assigns it a unique id through our util function
    this.props.createTodo({todo}).then(
      () => this.setState({title: '', body: ''})   //This resets the form
    );   //Here we're invoking the action creator and passing it our new todo
  }

  render () {
    return(
      <form className="todo-form" onSubmit={this.handleSubmit}>
        <ErrorList errors={ this.props.errors } />
        <label>Enter the title of your new todo:
          <input
            className="input"
            type="text"
            ref="title"
            value={this.state.title}
            placeholder="do some stuuuuff!"
            onChange={this.update('title')}
            required />
        </label>
        <label>Body:
          <textarea
            className="input"
            ref="body"
            cols='20'
            rows='5'
            value={this.state.body}
            placeholder="...but my body, my body is tellin' me yeeeaheeaah"
            onChange={this.update('body')}
            required></textarea>
        </label>
        <button className="create-button">Create Todo!</button>
      </form>
    );
  }
}

export default TodoForm;

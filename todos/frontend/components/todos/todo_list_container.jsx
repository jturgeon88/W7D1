import { connect } from 'react-redux';
import TodoList from './todo_list';

import { fetchTodos, createTodo } from '../../actions/todo_actions';
import { allTodos } from '../../reducers/selectors';

const mapStateToProps = state => ({
	todos: allTodos(state),
	errors: state.errors
});

const mapDispatchToProps = dispatch => ({
	fetchTodos: () => dispatch(fetchTodos()),
	createTodo: todo => dispatch(createTodo(todo))
});


const TodoListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);

export default TodoListContainer;

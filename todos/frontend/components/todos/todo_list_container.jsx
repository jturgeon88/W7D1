import { connect } from 'react-redux';
import TodoList from './todo_list';

import { fetchTodos, createTodo, updateTodo, deleteTodo } from '../../actions/todo_actions';
import { allTodos } from '../../reducers/selectors';

const mapStateToProps = state => ({
	todos: allTodos(state),
	errors: state.errors
});

const mapDispatchToProps = dispatch => ({
	requestTodos: () => dispatch(fetchTodos()),
	createTodo: todo => dispatch(createTodo(todo)),
	updateTodo: todo => dispatch(updateTodo(todo)),
	deleteTodo: todo => dispatch(deleteTodo(todo))
});

const TodoListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);

export default TodoListContainer;

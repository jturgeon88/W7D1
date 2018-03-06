import { connect } from 'react-redux';
import TodoList from './todo_list';

import { fetchTodos, receiveTodo } from '../../actions/todo_actions';
import { allTodos } from '../../reducers/selectors';

const mapStateToProps = state => ({
	todos: allTodos(state),
});

const mapDispatchToProps = dispatch => ({
	fetchTodos: () => dispatch(fetchTodos())
});


const TodoListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);

export default TodoListContainer;

import { RECEIVE_TODOS,
         RECEIVE_TODO,
         REMOVE_TODO} from '../actions/todo_actions';
import merge from 'lodash/merge';

const initialState = {
  1: {
    id: 1,
    title: 'wash car',
    body: 'with soap',
    done: false
  },
  2: {
    id: 2,
    title: 'wash dog',
    body: 'with shampoo',
    done: true
  },
};

const todosReducer = (state = initialState, action) => {
  Object.freeze(state);
  let nextState;

  switch(action.type){
    case RECEIVE_TODOS:
      return action.todos;
    case RECEIVE_TODO:
      const newTodo = {[action.todo.id]: action.todo};
      return merge({}, state, newTodo);
    case REMOVE_TODO:
      nextState = merge({}, state);
      console.log(nextState[action.todo.id]);
      console.log("HEYOO");
      console.log(nextState);
      delete nextState[action.todo.id];
      console.log('should be deleted?');
      console.log(nextState);
      return nextState;
    default:
      return state;
  }
};

// window.todosReducer = todosReducer;

export default todosReducer;

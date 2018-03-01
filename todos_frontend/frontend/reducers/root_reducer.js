//THis will be responsible for combining our multiple domain specific reducers
import { combineReducers } from 'redux';

import todosReducer from './todos_reducer';

const rootReducer = combineReducers({
  todos: todosReducer
});

export default rootReducer;

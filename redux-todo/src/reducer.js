import { combineReducers } from "redux";

import todosSlice from './features/todos/todosSlice';
import filterSlice from './features/filters/filtersSlice';

const rootReducer=combineReducers({
    todos:todosSlice,
    filters:filterSlice,
})
export default rootReducer;
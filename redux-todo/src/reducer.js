import { combineReducers } from "redux";

import todosSlice from './features/todos/todosSlice';
import filterSlice from './features/filter/filtersSlice';

const rootReducer=combineReducers({
    todos:todosSlice,
    filters:filterSlice,
})
export default rootReducer;
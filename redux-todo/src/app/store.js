import {applyMiddleware, configureStore} from '@reduxjs/toolkit';
import rootReducer from '../reducer.js';

let preloadedState;
const persistedTodoString=localStorage.getItem('todos');

if(persistedTodoString){
    preloadedState={
        todos:JSON.parse(persistedTodoString)
}
}


 const store=configureStore({
    preloadedState,
    reducer:rootReducer,
})
export default store;

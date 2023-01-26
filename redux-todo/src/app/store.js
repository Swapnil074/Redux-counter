import {applyMiddleware, configureStore} from '@reduxjs/toolkit';
import rootReducer from '../reducer.js';
import { print1,print2,print3 } from '../exampleAddons/middleware.js';

let preloadedState;
const persistedTodoString=localStorage.getItem('todos');

if(persistedTodoString){
    preloadedState={
        todos:JSON.parse(persistedTodoString)
}
}

const middlewareEnhancer=applyMiddleware(print1,print2,print3);

export const store=configureStore({
    reducer:rootReducer,
    middleware:[middlewareEnhancer]
})

import React from 'react'
import TodoListItem from './TodoListItem'
import { useSelector } from 'react-redux'

const selectTodos=state=>state.todos;

const TodoList = () => {
  const list = useSelector(selectTodos);

  const renderedListItems = list.todos.map((todo) => {
    return <TodoListItem key={todo.id} todo={todo} />
  })

  return <ul className="todo-list">{renderedListItems}</ul>
}

export default TodoList

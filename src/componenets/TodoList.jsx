import React from 'react'
import { useRecoilValue } from 'recoil';
import TodoItemCreator from './TodoItemCreator.jsx';
import TodoItem from './TodoItem.jsx';
import { todoListState } from '../recoil/todo.js';
import TodoListFilters from './TodoListFilters.jsx';
import TodoListStats from './TodoListStats.jsx';

function TodoList() {
  const todoList=useRecoilValue(todoListState);

  return (
    <>
      <TodoListStats/>
      <TodoListFilters/>
      <TodoItemCreator/>

      {todoList.map((todoItem)=>(
        <TodoItem key={todoItem.id} item={todoItem}/>
      ))}
    </>
  )
}

export default TodoList
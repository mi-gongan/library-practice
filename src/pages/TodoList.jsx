import React from 'react'
import { useRecoilValue } from 'recoil';
import TodoItemCreator from '../components/Todo/TodoItemCreator.jsx';
import TodoItem from '../components/Todo/TodoItem.jsx';
import { todoListState } from '../recoil/todo.js';
import TodoListFilters from '../components/Todo/TodoListFilters.jsx';
import TodoListStats from '../components/Todo/TodoListStats.jsx';

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
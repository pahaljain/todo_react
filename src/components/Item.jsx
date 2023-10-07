import React, { useState } from 'react'
import { useTodo } from '../context/TodoContext'

function Item({todo}) {
  const [todoEditable,setTodoEditable] = useState(false);
  // const [msg, setmsg] = useState(todo.todo);

  const { deleteTodo ,updateTodo , toggleChecked} = useTodo();

  // const delTodo = () => {
  //   deleteTodo();
  // }

  // const editTodo = () => {
  //   updateTodo(todo.id , {...todo , todo: msg})
  // }

  return (
    <div className='flex justify-around p-4 m-3 bg-slate-800 text-white rounded-lg w-1/4'>
      <input className='m-1' value={todoEditable} onChange={(e) => setTodoEditable(e.target.checked)} type="checkbox"/>
      <h1 className='m-2' >{todo}</h1>
      <button className='m-2 bg-red-400 w-24 rounded-md'>Edit</button>
      <button className='m-2 bg-red-400 w-24 rounded-md' >Delete</button>
    </div>
  )
}

export default Item
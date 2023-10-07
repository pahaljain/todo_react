import React, { useState } from 'react'
import { useTodo } from '../context/TodoContext'

function TodoForm() {

  const [text,setText] = useState("");
  const {addTodo} = useTodo();

  const add = (e) => {
    e.preventDefault();
    addTodo({todo: text ,completed: false});
    setText("");
  }

  return (
    <>
        <form onSubmit={add} className="bg-red-400 m-4 p-4 w-1/4 flex h-20">
            <input type="text" value={text} required className='m-2 w-full' onChange={e => setText(e.target.value)} placeholder='todo'/>
            <button 
            className='bg-black rounded-md w-24 h-10 m-1 text-white'
            >Add Todo</button>
        </form>
    </>
  )
}

export default TodoForm
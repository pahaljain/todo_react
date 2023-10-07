import { useState } from 'react'
import './App.css'
import {TodoContextProvider, useTodo} from './context/TodoContext'
import Item from './components/Item';
import TodoForm from './components/TodoForm';

function App() {

  const [todo , setTodo] = useState([]);

  const addTodo = (newTodo) => {
    setTodo((prev) => [...prev , {id: Date.now() , ...newTodo}])
  }

  const deleteTodo = (id) => {
    setTodo(prev => prev.filter((prevTodo) => prevTodo.id !== id))
  }

  const updateTodo = (id,todo) => {
    setTodo(prev => prev.map((prevTodo) => prevTodo.id === id ? todo : prevTodo))
  }
  const toggleChecked = (id) => {
    setTodo(prev => prev.map((prevTodo) => prevTodo.id === id ? {...prevTodo , checked: !prevTodo.checked} : prevTodo))
  }

  return (
    <TodoContextProvider value={{todo , addTodo , deleteTodo , updateTodo , toggleChecked}} >
      <div className='flex-col justify-center'>
        <TodoForm/>

        <div className='bg-blue-400 m-4 p-4'>
          {todo.map((prev) => (
            <Item todo={prev.todo} key={prev.id}/>
          )
          )}
        </div>
      </div>
    </TodoContextProvider>
  )
}

export default App
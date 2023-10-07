import {useContext , createContext} from 'react'

export const TodoContext = createContext({
    todo:[
    {
        id: 1,
        todo: "todo item",
        checked: false
    }
    ],
    addTodo: (todo) => {},
    deleteTodo: (id) => {},
    updateTodo: (id,todo) => {},
    toggleChecked: (id) => {},
});

export const TodoContextProvider = TodoContext.Provider;

export const useTodo = () => useContext(TodoContext);
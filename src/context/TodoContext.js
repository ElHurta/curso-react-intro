import React, {useState} from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

const TodoContext = React.createContext();

function TodoProvider({children}) {
    const {
        item: todoList,
        saveItem: setTodoList,
        loading,
        error
    } = useLocalStorage('TODO_LIST', [
        {text: 'Cortar cebolla', completed: false},
    ])

    const [searchValue, setSearchValue] = useState('')
    const [openModal, setOpenModal] = useState(false)

    const completedTodos = todoList.filter(todo => !!todo.completed).length
    const totalTodos = todoList.length

    const searchedTodos = todoList.filter(todo => todo.text.toLowerCase().includes(searchValue.toLowerCase()))

    const toogleTodo = (text) => {
        const todoIndex = todoList.findIndex(todo => todo.text === text)
        const newTodoList = [...todoList]
        newTodoList[todoIndex].completed = !newTodoList[todoIndex].completed
        setTodoList(newTodoList)
    }

    const deleteTodo = (text) => {
        const todoIndex = todoList.findIndex(todo => todo.text === text)
        const newTodoList = [...todoList]
        newTodoList.splice(todoIndex, 1)
        setTodoList(newTodoList)
    }

    const createTodo = (text) => {
        const newTodo = {text, completed: false}
        const newTodoList = [...todoList]
        newTodoList.push(newTodo)
        setTodoList(newTodoList)
    }

    return(
        <TodoContext.Provider
            value={{
                loading,
                error,
                totalTodos,
                completedTodos,
                searchValue,
                setSearchValue,
                searchedTodos,
                toogleTodo,
                deleteTodo,
                createTodo,
                openModal,
                setOpenModal
            }}>
            {children}
        </TodoContext.Provider>
    );
}

export { TodoContext, TodoProvider };
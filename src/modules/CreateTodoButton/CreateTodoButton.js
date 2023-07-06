import React from 'react'
import './CreateTodoButton.css'
import { TodoContext } from '../../context/TodoContext'

function CreateTodoButton(){

    const {
        setOpenModal,
    } = React.useContext(TodoContext)

    return (
        <div className="create-todo-button-container">
            <button
                className="create-todo-button"
                onClick={() => setOpenModal(prevState => !prevState)}
                >+
                
            </button>
        </div>
    )
}

export {CreateTodoButton}
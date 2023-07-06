import React from 'react'
import './TodoCounter.css'
import { TodoContext } from '../../context/TodoContext'

function TodoCounter(){

    const {
        totalTodos,
        completedTodos
    } =  React.useContext(TodoContext)

    return (
        <>
        {
            totalTodos === completedTodos ?
            <h2
                className='todo-counter-text'
                style={{color: 'green'}}>
                    ¡Felicidades! Has completado todos tus TODOs
            </h2>
            :
            <h2
                className='todo-counter-text'>
                    Has completado {completedTodos} de {totalTodos} TODOs
            </h2>
        }
        </>
    )

}

export {TodoCounter}
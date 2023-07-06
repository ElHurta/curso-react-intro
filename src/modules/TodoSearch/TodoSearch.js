import React from 'react'
import './TodoSearch.css'
import { TodoContext } from '../../context/TodoContext'

function TodoSearch(){

    const {
        searchValue,
        setSearchValue
    } = React.useContext(TodoContext)
    return (
        <>
            <div className='todo-search-bar-container'>
                <p>Busca tus TODOs:</p>
                <input
                    className="todo-search-bar"
                    placeholder=" Cortar Cebolla"
                    value={searchValue}
                    onChange={e => setSearchValue(e.target.value)}
                />
            </div>
        </>
    )
}

export {TodoSearch}
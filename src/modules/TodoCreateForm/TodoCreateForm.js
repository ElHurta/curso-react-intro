import React from 'react'
import { TodoContext } from '../../context/TodoContext'

import './TodoCreateForm.css'

function TodoCreateForm() {

  const [newTodoValue, setNewTodoValue] = React.useState('')

  const {
    createTodo,
    setOpenModal
  } = React.useContext(TodoContext)

  const onSubmit = (event) => {
    event.preventDefault()
    createTodo && createTodo(newTodoValue)
    setOpenModal && setOpenModal(false)
  }

  return (
    <form onSubmit={onSubmit} className='form-body'>
        <label className='form-label'>Crea un nuevo Todo</label>
        <input
          value={newTodoValue}
          onChange={(event) => setNewTodoValue(event.target.value)}
          className='form-input'
          placeholder='Conseguir trabajo...' />
        <div className='form-btns-container'>

          <button
            className='form-button form-button-cancel'
            onClick={() => setOpenModal(false)}
          >Cancelar</button>

          <button
            className='form-button'
          >Crear</button>

        </div>
    </form>
  )
}

export {TodoCreateForm}
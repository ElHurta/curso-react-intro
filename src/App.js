import { TodoCounter } from './modules/TodoCounter/TodoCounter';
import { TodoSearch } from './modules/TodoSearch/TodoSearch';
import { TodoList } from './modules/TodoList/TodoList';
import { TodoItem } from './modules/TodoList/components/TodoItem/TodoItem';
import { CreateTodoButton } from './modules/CreateTodoButton/CreateTodoButton';
import { TodosLoading } from './modules/components/TodosLoading/TodosLoading';
import { TodosError } from './modules/components/TodosError/TodosError';
import { TodosEmpty } from './modules/components/TodosEmpty/TodosEmpty';
import { TodoCreateForm } from './modules/TodoCreateForm/TodoCreateForm';

import { TodoContext } from './context/TodoContext';

import React from 'react';

import './App.css';
import { Modal } from './shared/components/Modal/Modal';


function App() {

  const {
    loading,
    error,
    searchedTodos,
    toogleTodo,
    deleteTodo,
    openModal
  } = React.useContext(TodoContext)

  return (
    <>
      <section className='todo-container'>

          <div className='todo-card'>
            {
              loading ? <TodosLoading /> :
              <>
                <TodoCounter />

                <TodoSearch />

                <TodoList>
                  { error && <TodosError /> }
                  { (!loading && !searchedTodos.length) && <TodosEmpty /> }
                  {
                    searchedTodos.map(todo => (
                      <TodoItem
                        key={todo.text}
                        text={todo.text}
                        completed={todo.completed}
                        onComplete={() => toogleTodo(todo.text)}
                        onDelete={() => deleteTodo(todo.text)}
                      />
                    ))
                  }
                </TodoList>

                <CreateTodoButton />

                {
                  openModal && (
                    <Modal>
                      <TodoCreateForm />
                    </Modal>
                  )
                }
              </>
            }
          </div>
      </section>
    </>
  );
}

export default App;

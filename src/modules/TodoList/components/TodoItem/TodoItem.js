import { BsCheckCircle, BsCheckCircleFill } from "react-icons/bs";
import { BsFillTrashFill } from "react-icons/bs";
import './TodoItem.css'


function TodoItem({
    text,
    completed,
    onComplete,
    onDelete
}){

    return (
      <li className='todo-item'>
        {
          completed ?
          <BsCheckCircleFill
            onClick={onComplete}
            className='react-icon check'
          />
          :
          <BsCheckCircle
            onClick={onComplete}
            className='react-icon check'
          />
        }
         
        <p>{text}</p>
        <button
          onClick={onDelete}
        >
          <BsFillTrashFill
            className='react-icon delete'
          />
        </button>
        
      </li>
    )
}

export {TodoItem}

import { FaRegCheckCircle } from 'react-icons/fa'
import { MdDeleteForever } from 'react-icons/md'

const TodoList = ({currentTask, handleDelete}) => {
  return (
     <li key={currentTask.id} className='task-item'>
                   <span>{currentTask.value}</span>
                   <div className='list-action-btns'>
                   <button>{<FaRegCheckCircle/>}</button>
                   <button onClick={()=>{handleDelete(currentTask.value)}}>{<MdDeleteForever/>}</button>
                   </div>
                 </li>
  )
}

export default TodoList

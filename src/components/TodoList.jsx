
import { FaRegCheckCircle } from 'react-icons/fa'
import { MdDeleteForever , MdOutlineRadioButtonUnchecked } from 'react-icons/md'


const TodoList = ({currentTask, onHandleDelete, onHandleCheck}) => {
  const task = localStorage.getItem("task");
  console.log(task);
  
  return (
     <li className='task-item'>
      <input type="text" />
                   <span className={`${currentTask.checked ? "checked" : ""}`}>{currentTask.value}</span>
                   <div className='list-action-btns'>
                   <button onClick={()=>{onHandleCheck(currentTask.value)}}>{ currentTask.checked?    <FaRegCheckCircle/> : <MdOutlineRadioButtonUnchecked/>}</button>
                   <button onClick={()=>{onHandleDelete(currentTask.value)}}>{<MdDeleteForever/>}</button>
                   </div>
                 </li>
  )
}

export default TodoList

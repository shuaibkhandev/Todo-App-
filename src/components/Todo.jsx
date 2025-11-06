import React, { useState } from 'react'
import { MdDeleteForever } from "react-icons/md";
import { FaRegCheckCircle } from "react-icons/fa";


const Todo = () => {
  const [inputVal, setInputVal] = useState("");
  const [task, setTask] = useState([]);
  const [alertMsg, setAlertMsg] = useState("");

  const handleInputChange = (value) => {
    setInputVal(value);
    
  }

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if(!inputVal.trim()) return;
    if(task.includes(inputVal)) return setAlertMsg("Alread Exist") ;
    setTask((prevTask)=> setTask([...prevTask, inputVal]));
   setInputVal("");
  }

  const now = new Date();
  const dateFormat = now.toLocaleDateString();
  const timeFormat = now.toLocaleTimeString();


  return (
    <section className='todo-container'>
      {alertMsg && <p>{alertMsg}</p>}
    <header>
      <h1>Todo List</h1>
       <h3 className='date-time'>{dateFormat} - {timeFormat}</h3>
      <div className="form-container">
        <form onSubmit={handleFormSubmit}>
          <div>
            <input type="text" className='todo-input' autoComplete='off' onChange={(event)=>handleInputChange(event.target.value)} value={inputVal} />
          </div>
          <div>
            <button type='submit' className='todo-btn'>Add Task</button>
          </div>
        </form>
      </div>
      <div className="task-list-container">
        <ul className='task-list'>
          {
          task?.map((currentTask, index)=>{
            return (
              <li key={index} className='task-item'>
                <span>{currentTask}</span>
                <div className='list-action-btns'>
                <button>{<FaRegCheckCircle/>}</button>
                <button>{<MdDeleteForever/>}</button>
                </div>
              </li>
            )
          })
          }
        </ul>
      </div>
    </header>
    </section>
  )
}

export default Todo

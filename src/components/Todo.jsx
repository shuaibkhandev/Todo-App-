import React, { useEffect, useState } from 'react'
import { MdDeleteForever } from "react-icons/md";
import { FaRegCheckCircle } from "react-icons/fa";


const Todo = () => {
  const [inputVal, setInputVal] = useState("");
  const [task, setTask] = useState([]);
  const [dateTime, setDateTime] = useState("");
  const [alertMsg, setAlertMsg] = useState("");

  const handleInputChange = (value) => {
    setInputVal(value);
  }

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setAlertMsg("");
    const ValInCap = inputVal.trim().charAt(0).toUpperCase() + inputVal.slice(1);
    if(!ValInCap) return;
    if(task.includes(ValInCap)) return setAlertMsg("Alread Exist") ;
    setTask((prevTask)=> setTask([...prevTask, ValInCap]));
    setInputVal("");

  }

  

  useEffect(()=>{
  const dateTimeInterval = setInterval(()=>{
const now = new Date();
  const dateFormat = now.toLocaleDateString();
  const timeFormat = now.toLocaleTimeString();
setDateTime(`${dateFormat} - ${timeFormat}`)
  },1000)
    return () => clearInterval(dateTimeInterval);
  },[])

  const handleDelete = (deleteItem) => {
  const updatedTask = task.filter((todo)=> todo !== deleteItem);
  setTask(updatedTask);
  }

  const deleteAllList = () => setTask([]);

  return (
    <section className='todo-container'>
      {alertMsg && <p className='alert'>{alertMsg}</p>}
    <header>
      <h1>Todo List</h1>
       <h3 className='date-time'>{dateTime}</h3>
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
                <button onClick={()=>{handleDelete(currentTask)}}>{<MdDeleteForever/>}</button>
                </div>
              </li>
            )
          })
          }
        </ul>
      </div>
      <div className="delete-list-container">
        <button onClick={deleteAllList}>Delete All</button>
      </div>
    </header>
    </section>
  )
}

export default Todo

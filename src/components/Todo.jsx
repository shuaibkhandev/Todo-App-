import React, { useState } from 'react'

const Todo = () => {
  const [inputVal, setInputVal] = useState("");
  const [task, setTask] = useState([]);

  const handleInputChange = (value) => {
    setInputVal(value);
    
  }

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if(!inputVal.trim()) return;
    if(task.includes(inputVal)) return;
    setTask((prevTask)=> setTask([...prevTask, inputVal]));
   setInputVal("");
  }
  return (
    <section className='todo-container'>
    <header>
      <h1>Todo List</h1>

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
    </header>
    </section>
  )
}

export default Todo

import React, { useState } from 'react'

const TodoForm = ({handleFormSubmitProp}) => {
      const [inputVal, setInputVal] = useState({});

    const handleFormSubmit = (event) => {
        event.preventDefault();
        handleFormSubmitProp(inputVal);
    }

      const handleInputChange = (value) => {
    setInputVal({
        id:value + Math.floor(Math.random() * 10),
        value:value,
        checked:false
    });
  }
  return (
     <form onSubmit={handleFormSubmit}>
              <div>
                <input type="text" className='todo-input' autoComplete='off' onChange={(event)=>handleInputChange(event.target.value)} value={inputVal.value} />
              </div>
              <div>
                <button type='submit' className='todo-btn'>Add Task</button>
              </div>
            </form> 
  )
}

export default TodoForm

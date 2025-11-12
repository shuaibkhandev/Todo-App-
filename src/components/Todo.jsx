import { useEffect, useState } from 'react'
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import TodoDate from './TodoDate';


const Todo = () => {
  const [task, setTask] = useState([]);
  const [alertMsg, setAlertMsg] = useState("");

  const handleFormSubmit = ({id, value, checked}) => {
    console.log(value);
    
  setAlertMsg("");
  const ValInCap = value.charAt(0).toUpperCase() + value.slice(1);
  if(!ValInCap) return;
  if(task.find((currEle)=> currEle.value === ValInCap)) return setAlertMsg("Alread Exist") ;
  setTask((prevTask)=> [...prevTask, {id, value:ValInCap, checked}]);
  }

  

console.log(alertMsg);


  const handleDelete = (deleteItem) => {
  const updatedTask = task.filter((todo)=> todo.value !== deleteItem);
  setTask(updatedTask);
  }

  const deleteAllList = () => setTask([]);

  return (
    <section className='todo-container'>
      {alertMsg && <p className='alert'>{alertMsg}</p>}
    <header>
      <h1>Todo List</h1>
       {<TodoDate/>}
      <div className="form-container">
      
        <TodoForm handleFormSubmitProp={handleFormSubmit}/>
      </div>
      <div className="task-list-container">
        <ul className='task-list'>
          {
          task?.map((currentTask, index)=>{
            return (
            <TodoList index={index} currentTask={currentTask} handleDelete={handleDelete} />
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

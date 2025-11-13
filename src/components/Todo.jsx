import { useEffect, useState } from 'react'
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import TodoDate from './TodoDate';


const Todo = () => {
  const [task, setTask] = useState([]);
  const [alertMsg, setAlertMsg] = useState("");

  const handleFormSubmit = ({id, value, checked}) => {
  const ValInCap = value.charAt(0).toUpperCase() + value.slice(1);
  if(!ValInCap) return;
  if(task.find((currEle)=> currEle.value === ValInCap)) return setAlertMsg("Alread Exist") ;
  setTask((prevTask)=> [...prevTask, {id, value:ValInCap, checked}]);
  }




  const handleDelete = (deleteItem) => {
  const updatedTask = task.filter((todo)=> todo.value !== deleteItem);
  setTask(updatedTask);
  }

  const handleCheck = (checkItem) => {
    
   const updatedTask =  task.map((item)=>{
      if(item.value === checkItem){
        return {...item, checked: !item.checked}
      }else{
        return item;
      }
    })
    setTask(updatedTask)
    
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
          task?.map((currentTask)=>{
            return (
            <TodoList key={currentTask.id} currentTask={currentTask} onHandleDelete={handleDelete} onHandleCheck={handleCheck}  />
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

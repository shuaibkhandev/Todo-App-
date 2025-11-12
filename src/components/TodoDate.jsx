import React, { useEffect, useState } from 'react'

const TodoDate = () => {
      const [dateTime, setDateTime] = useState("");
      useEffect(()=>{
  const dateTimeInterval = setInterval(()=>{
  const now = new Date();
  const dateFormat = now.toLocaleDateString();
  const timeFormat = now.toLocaleTimeString();
  setDateTime(`${dateFormat} - ${timeFormat}`)
  },1000)
    return () => clearInterval(dateTimeInterval);
  },[])
  return  <h3 className='date-time'>{dateTime}</h3>
  
}

export default TodoDate

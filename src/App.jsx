import React, { useState } from 'react'
import Todo from './components/Todo'

const App = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <Todo/>
  )
}

export default App

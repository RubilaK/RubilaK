import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
  
      <div>
       <h2>To Do List</h2> 
       <button>added</button>
       <button>Edit</button>
       <button>Delete</button>

      </div>
  )
}

export default App

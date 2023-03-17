import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Mainpage from './Mainpage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="bg-zinc-800 w-full h-screen">
          <Mainpage/>      
    </div>
  )
}

export default App

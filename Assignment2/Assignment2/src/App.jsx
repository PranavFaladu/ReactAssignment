import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Greet from './componet/Greet'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Greet/> 
    </>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {SaySomething, DivWrap} from './myStuff'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <SaySomething />
      <DivWrap />
    </>
  )
}

export default App

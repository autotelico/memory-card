import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {SaySomething, DivWrap, CityList, Button} from './myStuff'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <DivWrap />
      <Button />
    </>
  )
}

export default App

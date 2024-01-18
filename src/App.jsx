import { useState } from 'react'
import Router from './Components/AllRouter/Route'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div><Router/></div>
  )
}

export default App

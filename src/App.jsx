import { useState } from 'react'
import Termometro from './components/Termometro'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Olá mundo</h1>
      <Termometro classname />
    </>
  )
}

export default App

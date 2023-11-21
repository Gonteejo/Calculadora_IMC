import { useState } from 'react'
import Termometro from './components/Termometro'
import './global.css';

function App() {
  return (
    <div className="container">
      <h1>Calculadora de IMC</h1>
      <Termometro valorImc="20"/>
    </div>
  )
}

export default App
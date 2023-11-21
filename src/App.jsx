import { useState } from 'react';
import Formulario from './components/Formulario';
import Termometro from './components/Termometro';
import './global.css';

function App() {
  const [imc, setImc] = useState(0);

  const atualizaIMC = (novoIMC) => {
    setImc(novoIMC);
  };

  return (
    <div className="container">
      <h1>Calculadora de IMC</h1>
      <Formulario alteraIMC={atualizaIMC} />
      {imc > 0 && (
        <>
        <h2>Seu IMC é: {imc.toFixed(2)}</h2>
        </>
      )}
      <Termometro valorImc={imc} />
    </div>
  );
}

export default App;
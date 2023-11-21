import { useState } from "react"
import styles from './Fomulario.module.css';
import { set } from "lodash";

const Formulario = ({ alteraIMC }) => {
  const [peso, setPeso] = useState(0);
  const [altura, setAltura] = useState(0);

  const calculaIMC = () => {
    if (peso < 30 || peso > 300) {
      alert("Peso deve estar entre 30 e 300");
      return;
    }

    if (altura < 1.10 || altura > 3) {
      alert("Altura deve estar entre 1,10 e 3");
      return;
    }

    const imcCalculado = Number(peso) / (Number(altura) * Number(altura));
    alteraIMC(imcCalculado);
  };

  return (
    <>
      <form>
        <div>
          <label>Peso</label>
          <input
            onChange={(e) => {
              setPeso(e.target.value);
            }}
            type="number"
            step="0.01"
            name="peso"
            id="peso"
            placeholder="Digite seu peso"
            required
            min="30"
            max="300"
          ></input>
        </div>
        <div>
          <label>Altura</label>
          <input
            onChange={(e) => {
              setAltura(e.target.value);
            }}
            type="number"
            step="0.01"
            name="altura"
            id="altura"
            placeholder="Digite sua altura"
            required
            min="1"
            max="3"
          ></input>
        </div>
        <button
          onClick={(e) => {
            e.preventDefault();
            calculaIMC();
          }}
        >
          Calcular IMC
        </button>
      </form>
    </>
  );
};

export default Formulario;
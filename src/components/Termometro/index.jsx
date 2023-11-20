import { useState, useEffect } from "react"
import GaugeComponent from 'react-gauge-component'
import styles from './Termometro.module.css'

const escalaIMC = (value) => {
  if (value >= 40) {
    return value + ' Obsidade Grau III';
  }
  else if (value >= 35) {
    return value + ' Obsidade Grau II';
  }
  else if (value >= 30) {
    return value + ' Obsidade Grau I';
  }
  else if (value >= 25) {
    return value + ' Sobrepeso';
  }
  else if (value >= 18.5) {
    return value + ' Normal';
  }
  else if (value >= 17) {
    return value + ' Abaixo do peso';
  }
  else {
    return value + ' Muito abaixo do peso';
  }
}

const Termometro = () => {
  return (
    <>
      <h1>testando</h1>
      <div className="meter">
        <GaugeComponent
          type="semicircle"
          arc={{
            width: 0.2,
            padding: 0.005,
            cornerRadius: 1,
            //gradient: true,
            subArcs: [
              {
                limit: 17,
                color: '#2C5DFE',
              },
              {
                limit: 18.5,
                color: '#00B3FF',
              },
              {
                limit: 25,
                color: '#33D23F',
              },
              {
                limit: 30,
                color: '#FEE601',
              },
              {
                limit: 35,
                color: '#FEAC00',
              },
              {
                limit: 40,
                color: '#FF782A',
              },
              {
                limit: 41,
                color: '#FE2E25',
              },
            ]
          }}
          labels={{
            valueLabel: {
              fontSize: 40,
              formatTextValue: escalaIMC
            },
            tickLabels: {
              type: "inner",
              style: { fontSize: 40 },
              ticks: [
                { value: 17 },
                { value: 18.5 },
                { value: 25 },
                { value: 30 },
                { value: 35 },
                { value: 40 }
              ],
              valueConfig: {
                formatTextValue: escalaIMC
              }
            }
          }}
          value={30}
          minValue={16}
          maxValue={41}
          pointer={{ type: "arrow" }}
        />
      </div>
    </>

  )
}

export default Termometro
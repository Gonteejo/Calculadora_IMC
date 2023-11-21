import GaugeComponent from 'react-gauge-component'

const escalaIMC = (value) => {
  if (value >= 40) {
    return ' Obsidade Grau III';
  }
  else if (value >= 35) {
    return ' Obsidade Grau II';
  }
  else if (value >= 30) {
    return ' Obsidade Grau I';
  }
  else if (value >= 25) {
    return ' Sobrepeso';
  }
  else if (value >= 18.5) {
    return ' Normal';
  }
  else if (value >= 17) {
    return ' Abaixo do peso';
  }
  else {
    return ' Muito abaixo do peso';
  }
}

const Termometro = ({ valorImc }) => {
  return (
    <>
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
            formatTextValue: escalaIMC,
            style: {
              fontSize: "20px",
              fill: "#464A4F",
              fontWeight: "bold",
              textShadow: "unset",
            }
          },
          tickLabels: {
            hideMinMax: true,
          },
        }}
        value={valorImc}
        minValue={16}
        maxValue={41}
        pointer={{ type: "arrow" }}
      />
    </>

  )
}

export default Termometro
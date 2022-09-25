const Resultado = (props) => {
  let resultadoFinal;

  if (
    props.jugador1.derrota === props.jugador2.eleccion &&
    props.jugador1.eleccion
  ) {
    resultadoFinal = <h1>El Ganador es el Jugador 1</h1>;
    //<div>{Contador}</div>
  } else if (
    props.jugador2.derrota === props.jugador1.eleccion &&
    props.jugador1.eleccion
  ) {
    resultadoFinal = <h1>El Ganador es el Jugador 2</h1>;
    //<div>{Contador}</div>
  } else if (
    props.jugador1.eleccion === props.jugador2.eleccion &&
    props.jugador1.eleccion
  ) {
    resultadoFinal = <h1>Es un Empate</h1>;
  }

  return <h2>{resultadoFinal}</h2>;
};

export default Resultado;
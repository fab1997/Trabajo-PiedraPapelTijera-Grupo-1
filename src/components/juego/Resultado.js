import React from "react";
//import Contador from "../components/juego/Contador";

const Resultado = (props) => {
  let resultadoFinal;

  if (
    props.jugador1.derrota === props.jugador2.eleccion &&
    props.jugador1.eleccion
  ) {
    resultadoFinal = <h1>El Ganador es el Jugador 1</h1>;
    manejarWinsJ1();
  } else if (
    props.jugador2.derrota === props.jugador1.eleccion &&
    props.jugador1.eleccion
  ) {
    resultadoFinal = <h1>El Ganador es el Jugador 2</h1>;
    manejarWinsJ2();
  } else if (
    props.jugador1.eleccion === props.jugador2.eleccion &&
    props.jugador1.eleccion
  ) {
    resultadoFinal = <h1>Es un Empate</h1>;
  }

  return <h1>{resultadoFinal}</h1>;
};

export default Resultado;
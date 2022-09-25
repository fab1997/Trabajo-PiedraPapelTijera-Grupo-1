import React, { useState } from "react";
import Boton from "../components/juego/Boton";
import Contador from "../components/juego/Contador";
import Resultado from "../components/juego/Resultado";
import Imagen from "../components/juego/Imagen";
import { Link } from "react-router-dom";
import "../styles/Juego.css";

export default function Juego() {
  const [eleccionJugador1, setEleccionJugador1] = useState("ImagenBase");
  const [eleccionJugador2, setEleccionJugador2] = useState("ImagenBase");

  const opciones = [
    {
      eleccion: "Piedra",
      derrota: "Tijera",
    },
    {
      eleccion: "Papel",
      derrota: "Piedra",
    },
    {
      eleccion: "Tijera",
      derrota: "Papel",
    },
  ];

  const eleccionRandomJ1 = () => {
    const eleccion = opciones[Math.floor(Math.random() * opciones.length)];
    setEleccionJugador1(eleccion);
  };

  const eleccionRandomJ2 = () => {
    const eleccion = opciones[Math.floor(Math.random() * opciones.length)];
    setEleccionJugador2(eleccion);
  };

  const hacerClic = () => {
    eleccionRandomJ1();
    eleccionRandomJ2();
  }

  const volverHome = () => {
    <Link to='/' className="btn-principal"></Link>
  }

  return (
    <div className="juego">
      <body>
        <main>
          <h3>
            <section id="jugador1">
              <div className="jugador1">Jugador 1</div>
              <div className="eleccion">{eleccionJugador1.eleccion}</div>
              <div clasName="imagen">{Imagen.ImagenActual}</div>
              <div>Puntaje Jugador 1: {Contador}</div>
            </section>
          </h3>
          <h4>
            <section id="jugador2">
              <div className="jugador2">Jugador 2</div>
              <div className="eleccion">{eleccionJugador2.eleccion}</div>
              <div clasName="imagen">{Imagen.ImagenActual}</div>
              <div>Puntaje Jugador 2: {Contador}</div>
            </section>
          </h4>
          <section id="resultado">
            <Resultado jugador1={eleccionJugador1} jugador2={eleccionJugador2} />
          </section>
          <div className='botones'>
            <section id="boton-jugar">
              <a href="#"><Boton
                texto='Jugar'
                esBotonDeClic={true}
                manejarClic={hacerClic} /></a>
            </section>
            <section id="boton-volver">
              <a href="http://localhost:3000" rel="noopener noreferrer"><Boton
                texto='Volver'
                esBotonDeClic={false}
                manejarClic={volverHome} /></a>
            </section>
          </div>
        </main>
      </body>
    </div>
  );
};
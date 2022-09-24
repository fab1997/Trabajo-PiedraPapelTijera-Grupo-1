import React, { useState } from "react";
import Boton from "../components/juego/Boton";
import Contador from "../components/juego/Contador";
import Resultado from "../components/juego/Resultado";
import "../styles/Juego.css";

function Juego() {
    const [eleccionJugador1, setEleccionJugador1] = useState({});
    const [eleccionJugador2, setEleccionJugador2] = useState({});

    const opciones = [
        {
            eleccion: "piedra",
            derrota: "tijera",
        },
        {
            eleccion: "papel",
            derrota: "piedra",
        },
        {
            eleccion: "tijera",
            derrota: "papel",
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
        <Link to='/'></Link>
    }

    return (
        <div className="Juego">
            <main>
                <section>
                    <div className="jugador1">Jugador 1</div>
                    <div className="eleccion">{eleccionJugador1.eleccion}</div>
                </section>
                <section>
                    <div className="jugador2">Jugador 2</div>
                    <div className="eleccion">{eleccionJugador2.eleccion}</div>
                </section>
                <section>
                    <Resultado jugador1={eleccionJugador1} jugador2={eleccionJugador2} />
                </section>

                <Contador numWinsJ1={numWinsJ1} />
                <Contador numWinsJ2={numWinsJ2} />

                <div className='contenedor-principal'>

                    <Boton
                        texto='Jugar'
                        esBotonDeClic={true}
                        manejarClic={hacerClic} />
                    <Boton
                        texto='Volver'
                        esBotonDeClic={false}
                        manejarClic={volverHome} />
                </div>

            </main>
        </div>
    );
}

export default Juego;
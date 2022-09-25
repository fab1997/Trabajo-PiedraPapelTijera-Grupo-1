import React, { useState } from "react";
import Boton from "../components/juego/Boton";
//import Contador from "../components/juego/Contador";
import Resultado from "../components/juego/Resultado";
import Imagen from "../components/juego/Imagen";
import { Link } from "react-router-dom";
import "../styles/Juego.css";

export default function Juego() {
    const [eleccionJugador1, setEleccionJugador1] = useState({});
    const [eleccionJugador2, setEleccionJugador2] = useState({});

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


                <h1>Esto es el juego</h1>
                <main>
                    <section>
                        <div className="jugador1">Jugador 1</div>
                        <div className="eleccion">{eleccionJugador1.eleccion}</div>
                        <div clasName="imagen">ImagenActual</div>
                    </section>
                    <section>
                        <div className="jugador2">Jugador 2</div>
                        <div className="eleccion">{eleccionJugador2.eleccion}</div>
                        <div clasName="imagen">ImagenActual</div>
                    </section>
                    <section>
                        <Resultado jugador1={eleccionJugador1} jugador2={eleccionJugador2} />
                    </section>



                    <div className='contenedor-principal'>
                        <a href="#"><Boton
                            texto='Jugar'
                            esBotonDeClic={true}
                            manejarClic={hacerClic} /></a>

                        <a href="http://localhost:3000" rel="noopener noreferrer"><Boton
                            texto='Volver'
                            esBotonDeClic={false}
                            manejarClic={volverHome} /></a>
                    </div>
                </main>
            </body>
        </div>
    );
};
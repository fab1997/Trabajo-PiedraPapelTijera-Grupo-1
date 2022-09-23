import "../styles/Home.css";
import { Link } from "react-router-dom";
import Inicio from "../img/principal.jpeg";
export default function Home(){
    return(
        <div className="home">
            <h1>Piedra Papel o Tijera</h1>
            <img src={Inicio} alt="Juego"/>

            <Link to='/juego' className="btn-principal">Empezar a Jugar</Link>

            <Link to='/desarrolladores' className="btn-principal">Conocenos</Link>
        </div>
        
    )
};
import "../styles/Home.css";
import { Link } from "react-router-dom";
import Inicio from "../img/principal.jpeg";
import Button from "react-bootstrap/Button";
import sonido1 from '../sounds/sonido1.mp3';

export default function Home(){

    function play(){
        new Audio(sonido1).play();
    }
    return(
        <div className="home">
            <h1>Piedra Papel o Tijera</h1>
            <img src={Inicio} alt="Juego"  className="rounded mx-auto d-block"/>
            
            <div className="d-grid gap-2 col-6 mx-auto " >
                <Button variant="outline-success" size="lg" >
                    <Link to='/juego' className="btn btn-principal" onClick={play}>Empezar a Jugar</Link>
                </Button>
                <Button variant="outline-danger" size="lg" >
                    <Link to='/desarrolladores' className="btn btn-principal" onClick={play}>Conocenos</Link>
                </Button>
               
            </div>
        </div>
        
    )
};
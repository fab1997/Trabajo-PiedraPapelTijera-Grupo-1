import "../styles/Home.css";
import { Link } from "react-router-dom";
import Inicio from "../img/principal.jpeg";
import Button from "react-bootstrap/Button";

export default function Home(){
    return(
        <div className="home">
            <h1>Piedra Papel o Tijera</h1>
            <img src={Inicio} alt="Juego"  className="rounded mx-auto d-block"/>
            
            <div className="d-grid gap-2 col-6 mx-auto " >
                <Button variant="outline-info" size="lg" >
                    <Link to='/juego' className="btn btn-principal">Empezar a Jugar</Link>
                </Button>
                <Button variant="outline-danger" size="lg">
                    <Link to='/desarrolladores' className="btn btn-principal">Conocenos</Link>
                </Button>
               
            </div>
        </div>
        
    )
};
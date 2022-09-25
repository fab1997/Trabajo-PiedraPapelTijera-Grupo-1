import '../styles/desarrolladores.css';
import HeaderDevs from './desarrolladores/HeaderDevs';
import DevsMain from './desarrolladores/DevsMain';
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

function Desarrolladores() {
    return (
        <>
            <div className="container-fluid">
                <HeaderDevs />
                <DevsMain />
                <Button variant="warning" >
                    <Link to='/' className="btn btn-principal">Volver</Link>
                </Button>            
            </div>

        </>
    )
};

export default Desarrolladores
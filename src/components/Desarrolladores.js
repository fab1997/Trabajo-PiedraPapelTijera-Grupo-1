import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/desarrolladores.css';
import HeaderDevs from './desarrolladores/HeaderDevs';
import DevsMain from './desarrolladores/DevsMain';

function Desarrolladores() {
    return (
        <>
            <div className="container-fluid">
                <HeaderDevs />
                <DevsMain />                
            </div>

        </>
    )
};

export default Desarrolladores
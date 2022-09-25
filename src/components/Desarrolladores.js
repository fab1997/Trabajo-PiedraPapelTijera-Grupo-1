import 'bootstrap/dist/css/bootstrap.min.css';

import '../styles/desarrolladores.css';
import HeaderDevs from './HeaderDevs';
import DevsMain from './DevsMain';

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
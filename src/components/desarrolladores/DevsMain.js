import React from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

class DevsMain extends React.Component {
    render() {
        return (
            <main className='mainDevs'>

                <Card border="info" style={{ width: '25rem' }} className='cardDev'>
                    <Card.Header className='nameDev'>Ana Catalina Boccardo</Card.Header>
                    <Card.Img variant="top" src="./img/desarrolladores/boccardo.png" className='fotoPerfil' />
                    <Card.Body>
                        <ListGroup variant="flush">
                            <ListGroup.Item></ListGroup.Item>
                            <ListGroup.Item>Algo</ListGroup.Item>
                            <ListGroup.Item>Y aquí pondría una descripcion. Si tuviera una!!!</ListGroup.Item>
                        </ListGroup>
                    </Card.Body>
                </Card>

                <Card border="info" style={{ width: '25rem' }} className='cardDev'>
                    <Card.Header className='nameDev'>Ruth Jaquelina Cruz</Card.Header>
                    <Card.Img variant="top" src="./img/desarrolladores/cruz.png" className='fotoPerfil' />
                    <Card.Body>
                        <ListGroup variant="flush">
                            <ListGroup.Item></ListGroup.Item>
                            <ListGroup.Item>Algo</ListGroup.Item>
                            <ListGroup.Item>Y aquí pondría una descripcion. Si tuviera una!!!</ListGroup.Item>
                        </ListGroup>
                    </Card.Body>
                </Card>

                <Card border="info" style={{ width: '25em' }} className='cardDev'>
                    <Card.Header className='nameDev'>Lautaro Estrada</Card.Header>
                    <Card.Img variant="top" src="./img/desarrolladores/estrada.png" className='fotoPerfil' />
                    <Card.Body>
                        <ListGroup variant="flush">
                            <ListGroup.Item></ListGroup.Item>
                            <ListGroup.Item>Algo</ListGroup.Item>
                            <ListGroup.Item>Y aquí pondría una descripcion. Si tuviera una!!!</ListGroup.Item>
                        </ListGroup>
                    </Card.Body>
                </Card>

                <Card border="info" style={{ width: '25rem' }} className='cardDev'>
                    <Card.Header className='nameDev'>Alejandro Puca</Card.Header>
                    <Card.Img variant="top" src="./img/desarrolladores/puca.png" className='fotoPerfil' />
                    <Card.Body>
                        <ListGroup variant="flush">
                            <ListGroup.Item></ListGroup.Item>
                            <ListGroup.Item>Algo</ListGroup.Item>
                            <ListGroup.Item>Y aquí pondría una descripcion. Si tuviera una!!!</ListGroup.Item>
                        </ListGroup>
                    </Card.Body>
                </Card>

                <Card border="info" style={{ width: '25rem' }} className='cardDev'>
                    <Card.Header className='nameDev'>Elias David Robles</Card.Header>
                    <Card.Img variant="top" src="./img/desarrolladores/robles.jpg" className='fotoPerfil' />
                    <Card.Body>
                        <ListGroup variant="flush">
                            <ListGroup.Item></ListGroup.Item>
                            <ListGroup.Item>Juego Favorito: Monster Hunter (actualmente)</ListGroup.Item>
                            <ListGroup.Item>Interesado en computadoras desde la niñez, especialmente videojuegos. Buscando actualmente saber el proceso de creación y dirección de los mismos</ListGroup.Item>
                        </ListGroup>
                    </Card.Body>
                </Card>

                <Card border="info" style={{ width: '25rem' }} className='cardDev'>
                    <Card.Header className='nameDev'>Fabian Valdez</Card.Header>
                    <Card.Img variant="top" src="./img/desarrolladores/valdez.png" className='fotoPerfil' />
                    <Card.Body>
                        <ListGroup variant="flush">
                            <ListGroup.Item></ListGroup.Item>
                            <ListGroup.Item>Algo</ListGroup.Item>
                            <ListGroup.Item>Y aquí pondría una foto y descripcion. Si tuviera una!!!</ListGroup.Item>
                        </ListGroup>
                    </Card.Body>
                </Card>

            </main>
        )
    }
}

export default DevsMain
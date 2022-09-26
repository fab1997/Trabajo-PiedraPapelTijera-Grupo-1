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
                            <ListGroup.Item>Hobby: Dibujar, Animar y Escuchar Música</ListGroup.Item>
                            <ListGroup.Item>Una chica que le gusta crear, diseñar, programar y jugar videojuegos</ListGroup.Item>
                        </ListGroup>
                    </Card.Body>
                </Card>

                <Card border="info" style={{ width: '25rem' }} className='cardDev'>
                    <Card.Header className='nameDev'>Ruth Jaquelina Cruz</Card.Header>
                    <Card.Img variant="top" src="./img/desarrolladores/cruz.png" className='fotoPerfil' />
                    <Card.Body>
                        <ListGroup variant="flush">
                            <ListGroup.Item></ListGroup.Item>
                            <ListGroup.Item>Hobbies:Leer </ListGroup.Item>
                            <ListGroup.Item>Intereses: Terminar Hollow night, aprender técnicas de programación y IA.</ListGroup.Item>
                        </ListGroup>
                    </Card.Body>
                </Card>

                <Card border="info" style={{ width: '25em' }} className='cardDev'>
                    <Card.Header className='nameDev'>Lautaro Estrada</Card.Header>
                    <Card.Img variant="top" src="./img/desarrolladores/estrada.png" className='fotoPerfil' />
                    <Card.Body>
                        <ListGroup variant="flush">
                            <ListGroup.Item></ListGroup.Item>
                            <ListGroup.Item>Softcombat, juegos de rol, manga anime, taekwondo y literatura</ListGroup.Item>
                            <ListGroup.Item>Dormir, trabajar, programar, rehacer y volver a repetir</ListGroup.Item>
                        </ListGroup>
                    </Card.Body>
                </Card>

                <Card border="info" style={{ width: '25rem' }} className='cardDev'>
                    <Card.Header className='nameDev'>Alejandro Puca</Card.Header>
                    <Card.Img variant="top" src="./img/desarrolladores/puca.png" className='fotoPerfil' />
                    <Card.Body>
                        <ListGroup variant="flush">
                            <ListGroup.Item></ListGroup.Item>
                            <ListGroup.Item>Hobbies: Modelado 3D y practicante en animacion 3D</ListGroup.Item>
                            <ListGroup.Item>Jugar, dormir, adoro comer Pizza, Napolitana y comida Chatarra</ListGroup.Item>
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
                            <ListGroup.Item>Hobbies:Me gusta jugar a la pelota con amigos</ListGroup.Item>
                            <ListGroup.Item>Mirar series en mis tiempos libres y aprender electrónica</ListGroup.Item>
                        </ListGroup>
                    </Card.Body>
                </Card>

            </main>
        )
    }
}

export default DevsMain
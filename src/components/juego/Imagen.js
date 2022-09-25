import React, { useState } from "react";
import ImagenBase from "../../img/juego/ImagenBase.png";
import Piedra from "../../img/juego/Piedra.png";
import Tijera from "../../img/juego/Tijera.png";
import Papel from "../../img/juego/Papel.png";

function ImagenActual (props) {
    const [ImagenObjeto, setImagenObjeto] = useState({});
    const Imagen = <img src={ImagenBase} alt="ImagenBase" />;
    setImagenObjeto(Imagen);

    if ((props.jugador1.eleccion = "Piedra") || (props.jugador2.eleccion = "Piedra")) {

        setImagenObjeto(<img src={Piedra} alt="ImagenPiedra" />);

    } else if ((props.jugador1.eleccion = "Tijera") || (props.jugador2.eleccion = "Tijera")) {

        setImagenObjeto(<img src={Tijera} alt="ImagenTijera" />);

    } else if ((props.jugador1.eleccion = "Papel") || (props.jugador2.eleccion = "Papel")) {
        
        setImagenObjeto(<img src={Papel} alt="ImagenPapel" />);
    }

    return ImagenObjeto;
};

export default ImagenActual;
import React, { useState } from "react";
//import './Contador.css';

function Contador() {
  const [numWinsJ1, setNumWinsJ1] = useState(0);
  const [numWinsJ2, setNumWinsJ2] = useState(0);

  const manejarWinsJ1 = () => {
    setNumWinsJ1(numWinsJ1 + 1);
  }

  const manejarWinsJ2 = () => {
    setNumWinsJ2(numWinsJ2 + 1);
  }

  return {}
//    <div className='contador'>
//      {numWins}
//    </div>
//  ): 
}

export default Contador;

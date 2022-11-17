import { React, useState } from "react";
import { testFuncion } from "./testFuncion";
import { Grafo } from "./Grafo";

export function FormularioPaquetes(props) {
  const [arrayNumero, setNumero] = useState(props.lista);
  return (
    <>
      <h2>Lista</h2>
      {arrayNumero.map((index) => (
        <>
          {console.log(index)}
          <input
            key={index}
            type="text"
            name="nombre"
            placeholder={"Ingrese " + index}
          ></input>
          <br></br>
        </>
      ))}
      <div>
        <button
          onClick={() => {;
          }}
        >
          Pulsar
        </button>
      </div>
    </>
  );
}

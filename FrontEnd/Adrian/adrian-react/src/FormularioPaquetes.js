import { React, useState } from "react";

export function FormularioPaquetes(props) {
  const [arrayNumero, setNumero] = useState(props.lista);
  return (
    <>
      <h2>Lista</h2>
      {arrayNumero.map((index) => (
        <>
        <input
          type="text"
          name="nombre"
          id="nombres"
          placeholder={"Ingrese " + index}
        ></input>
        <br></br>
        </>
      ))}
     <input type="submit" value="Enviar"></input>
    </>
  );
}

/*  Prueba
      <></>
      {arrayNumero.map((item) => {
        return
        <input
          type="text"
          name="nombre"
          id="nombres"
          placeholder={"Ingrese " + props.elemento}
        >

        </input>
        } */

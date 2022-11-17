import React from "react";
import { useState } from "react";
import { showForms } from "./ShowForms";

export function FormularioCentros(props) {
  const [nombre, setnombre] = useState("");
  const [nodo, setnodo] = useState("");
  const [conexiones, setconexiones] = useState("");

  const recolectarData = (e) => {
    e.preventDefault();
    //console.log(nombre, nodo, conexiones);
    props.recolectar(nombre, nodo, conexiones);
  }

  return (
    <>
      <h1>Centros</h1>
      <a>Inserte lo solicitado para añadir un nuevo centro</a>
      <br />
      <form onSubmit={recolectarData}>
        <input
          placeholder="Inserte Nombre"
          onChange={function (e) {
            setnombre(e.target.value);
          }}
        ></input>
        <br />
        <input
          placeholder="Inserte Nodo"
          onChange={function (e) {
            setnodo(e.target.value);
          }}
        ></input>
        <br />
        <input
          placeholder="Inserte Conexiones"
          onChange={function (e) {
            setconexiones(e.target.value);
          }}
        ></input>
        <br />
        <button>Añadir</button>
      </form>
    </>
  );
}

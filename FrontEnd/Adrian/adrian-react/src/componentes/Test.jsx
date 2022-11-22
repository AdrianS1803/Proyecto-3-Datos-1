import React from "react";
import { useState } from "react";
import { Graphviz } from "graphviz-react";

export function Test(props) {
  const [nombre, setnombre] = useState("");
  const [node, setnode] = useState("");
  const [conexion, setconexion] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); //Previene el comportamiento por defecto, que se reinicie la pagina


    props.test(nombre, node, conexion);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Escribe tu Nombre"
        onChange={function (e) {
          setnombre(e.target.value);
        }}
      />
      <input
        placeholder="Escribe tu Nodo"
        onChange={function (e) {
          setnode(e.target.value);
        }}
      />
      <input
        placeholder="Escribe tu conexion"
        onChange={function (e) {
          setconexion(e.target.value);
        }}
      />
      <button>Guardar</button>
    </form>
  );

  /* if (props.test !== "") {
    console.log(props.test);
    return (
      <>
        <h1>{props.test}</h1>
        <Graphviz
          dot={`graph {
            grandparent -- father;
            child;
            "parent B" -- child;
            grandparent --  "parent B";
          }`}
        />
      </>
    );
  }
  if (props.test !== "adrian") {
    console.log(props.test);
    return (
      <>
        <h1>{props.test}</h1>
        <Graphviz
          dot={`graph {
          }`}
        />
      </>
    );
  } else {
    console.log(props.test);
    return (
      <>
        <Graphviz
          dot={`graph {
          }`}
        />
      </>
    );
  } */
}

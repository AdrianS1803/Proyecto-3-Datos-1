import React from "react";
import { useState } from "react";
import { Input } from "reactstrap";

export function SelecionarRuta(props) {
  console.log(props.rutas);
  return (
    <>
      <select>
        {props.rutas.map((ruta) => (
          <option key={ruta.id}>{ruta.name}</option>
        ))}
      </select>

      <Input></Input>
    </>
  );
}

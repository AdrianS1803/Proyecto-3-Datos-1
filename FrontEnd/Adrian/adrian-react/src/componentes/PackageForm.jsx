import React from "react";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function PackageForm(props) {
  const [title, settitle] = useState("");
  const [maxValue, setMaxValue] = useState("");
  const [salida, setSalida] = useState("");
  const [llegada, setLlegada] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); //Previene el comportamiento por defecto, que se reinicie la pagina
    props.sumSolicitados();
    props.sumPendientes(0);
    props.createPackage(title, maxValue, salida, llegada);
  };

  return (
    <Form>
      <Form.Group>
        <Form.Label>Agregar Paquete a enviar</Form.Label>
        <Form.Control
          type="email"
          placeholder="Titulo"
          onChange={function (e) {
            settitle(e.target.value);
          }}
        />
        <Form.Control
          type="email"
          placeholder="Peso"
          onChange={function (e) {
            setMaxValue(e.target.value);
          }}
        />
        <Form.Control
          type="email"
          placeholder="Salida"
          onChange={function (e) {
            setSalida(e.target.value);
          }}
        />
        <Form.Control
          type="email"
          placeholder="Llegada"
          onChange={function (e) {
            setLlegada(e.target.value);
          }}
        />
      </Form.Group>
      <Button onClick={handleSubmit}>Guardar</Button>
    </Form>
  );
}

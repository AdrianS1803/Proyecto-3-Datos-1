import React from "react";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function FormularioNodos(props) {
  const [nodo, setnodo] = useState("");
  const [conexion, setconexion] = useState("");
  const [peso, setpeso] = useState("");

  const handleSafe = (e) => {
    e.preventDefault(); //Previene el comportamiento por defecto, que se reinicie la pagina

    props.addNode(nodo, conexion, peso);
  };

  const handleDelete = (e) => {
    e.preventDefault(); //Previene el comportamiento por defecto, que se reinicie la pagina

    props.deleteNode(nodo, conexion, peso);
  };
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Agregar centro de distribucion</Form.Label>
        <Form.Control
          type="email"
          placeholder="Centro de distribucion"
          onChange={function (e) {
            setnodo(e.target.value);
          }}
        />
        <Form.Control
          type="email"
          placeholder="Conexión del centro"
          onChange={function (e) {
            setconexion(e.target.value);
          }}
        />
        <Form.Control
          type="email"
          placeholder="Peso de la conexión"
          onChange={function (e) {
            setpeso(e.target.value);
          }}
        />
        {/*  <Form.Button></Form.Button> */}
      </Form.Group>
      <Button onClick={handleSafe}>Guardar</Button>
      <Button onClick={handleDelete}>Borrar</Button>
    </Form>
  );
}

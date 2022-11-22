import React from "react";



export function ListGrafo(props) {

  return (
    <div>
      {props.centros.map((centro) => (
        <div key={centro.id}>
            <h1>{centro.name}</h1>
            <p>{centro.conexiones}</p>
           {/*  <button onClick={() => props.deleteTask(task.id)}>Eliminar</button> */} {/* En ves de solo deleteTask seria con una funcion externa para evitar el problema de ()  */}
        </div>
      ))}
    </div>
  );
}
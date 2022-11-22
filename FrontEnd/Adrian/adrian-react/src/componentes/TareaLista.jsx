import React from "react";



export function TareaLista(props) {

  return (
    <div>
      {props.tasks.map((task) => (
        <div key={task.id}>
            <h1>{task.title}</h1>
            <p>{task.description}</p>
            <button onClick={() => props.deleteTask(task.id)}>Eliminar</button> {/* En ves de solo deleteTask seria con una funcion externa para evitar el problema de ()  */}
            <progress value="62" max="100"/>
        </div>
      ))}
    </div>
  );
}

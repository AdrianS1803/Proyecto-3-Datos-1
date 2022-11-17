import React from "react";
import {useState} from 'react'

export function TaskForm(props) {
    const [title, settitle] = useState("")

    const handleSubmit = (e) =>{
        e.preventDefault(); //Previene el comportamiento por defecto, que se reinicie la pagina
        
        props.createTask(title)
    }

  return (
    <form onSubmit={handleSubmit}> {/* No poner () en este */}
      <input placeholder="Escribe tu tarea" onChange={function(e){settitle(e.target.value)}}/>
      <button>Guardar</button>
    </form>
  );
}

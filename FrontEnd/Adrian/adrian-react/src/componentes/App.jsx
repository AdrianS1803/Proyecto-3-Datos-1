import { FormularioCentros } from "./FormularioCentros";

import { TareaLista } from "./TareaLista";
import { TaskForm } from "./TaskForm";

import { tasks as data } from "./tasks";
import { useState, useEffect } from "react";
import {centros} from "./data/centros"
import {Test} from "./Test"

export function App() {
  const [tasks, setTasks] = useState([]);
  const [centro, setcentro] = useState("");

  useEffect(() => {
    setcentro(centro);
  }, []);

  useEffect(() => {
    setTasks(data);
  }, []);

  function createTask(taskTitle) {
    setTasks([
      ...tasks,
      {
        title: taskTitle,
        id: tasks.length,
        description: "aa",
      },
    ]);
    
  }

  function deleteTask(taskId) {
    console.log(taskId);
    setTasks(tasks.filter((task) => task.id !== taskId)); //Es como un if
  }

  function recolectar(nombre, nodo, conexiones) {
    console.log(nombre, nodo, conexiones)
    //setcentro("ee")
    setcentro(nombre+" "+nodo+" "+conexiones)
    console.log(centro)
  }

  function showXD() {}

  return (
    <>
      <FormularioCentros recolectar={recolectar}/>
      <TaskForm createTask={createTask} />
      <TareaLista tasks={tasks} deleteTask={deleteTask} />
      <br/>

        <Test test={centro}/>
    </>
  );
}

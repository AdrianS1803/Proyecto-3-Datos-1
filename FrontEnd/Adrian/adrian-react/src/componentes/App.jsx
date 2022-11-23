import { FormularioCentros } from "./FormularioCentros";

import { TareaLista } from "./TareaLista";
import { TaskForm } from "./TaskForm";

import { ListGrafo } from "./ListGrafo";

import { tasks as data } from "./tasks";
import { centros as dataCe } from "./data/centros";
import {grafo as graphData} from "./data/grafo"
import { GrafoTesteo } from "./GrafoTesteo";

import { useState, useEffect } from "react";

import { Test } from "./Test";

export function App() {
  const [tasks, setTasks] = useState([]);
  const [centro, setcentro] = useState([]);
  const [graph, setGraph] = useState(""); 

  useEffect(() => {
    setcentro(dataCe);
  }, []);

  useEffect(() => {
    setTasks(data);
  }, []);

  useEffect(() => {
    setGraph(graphData);
  }, []);
  {/*nosefkdsjklsd */}
  function createTask(taskTitle) {
    setTasks([
      ...tasks,
      {
        title: taskTitle,
        id: tasks.length,
        description: "aa",
      },
    ]);
    console.log(centro);
  }

  function deleteTask(taskId) {
    console.log(taskId);
    setTasks(tasks.filter((task) => task.id !== taskId)); //Es como un if
  }

  function take(nombre, nodo, conexiones) {
    setcentro([
      ...centro,
      { id: centro.length, name: nombre, nodo: nodo, conexiones: conexiones },
    ]);
    console.log(graph);
  }

  return (
    <>
      <TaskForm createTask={createTask} />

      <TareaLista tasks={tasks} deleteTask={deleteTask} />
      <br />

      <Test test={take} />

      <ListGrafo centros={centro} />
      <GrafoTesteo grafo={graph} yy={"digraph G {"+graph+"}"}></GrafoTesteo> {/* No entiendo porque es que no funciona el graph pero escrito directo si */}
      
    </>
  );
}

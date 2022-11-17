import React from "react";
import ReactDOM from "react-dom/client";

import { Greeting, UserCard } from "./componentes/Greeting";
import Product, { Navbar } from "./componentes/Product";
import Home from "./componentes/Home";

import { FormularioPaquetes, Testeo } from "./componentes/FormularioPaquetes";
import { Grafo } from "./componentes/Grafo";
import { testFuncion } from "./componentes/testFuncion";

import {App} from './componentes/App'




const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
  <App/>
  </>




/*   <>
    <FormularioPaquetes elemento="prin" lista={["Sebas", "Adrian", "Emilio"]} />
    <Grafo
      val={`digraph grafo {` + testFuncion(["A", "B"]) + ` B -> C C -> A}`}
    />
  </> */
);

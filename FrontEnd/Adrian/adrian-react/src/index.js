import React from "react";
import ReactDOM from "react-dom/client";
import { Greeting, UserCard } from "./Greeting";
import Product, { Navbar } from "./Product";
import Home from "./Home";
import {FormularioPaquetes, Testeo} from "./FormularioPaquetes"
import {Grafo} from "./Grafo"

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>

    <Grafo/>
    <FormularioPaquetes elemento="prin" lista={["Sebas","Adrian","Emilio"]}/>
    

  
  </>
);

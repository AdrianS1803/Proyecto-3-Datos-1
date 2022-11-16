import React from "react";
import { Graphviz } from "graphviz-react";

export function Grafo() {
    const padre = "parent A"

  return (
    <div>
      <Graphviz
        dot={
            
            
            `graph {
         grandparent -- `+padre+`;
         child;
         "parent B" -- child;
         grandparent --  "parent B";
       }`}
      />
    </div>
  );
  /*  <div>
       <Graphviz dot={`graph {
        grandparent -- "parent A";
        child;
        "parent B" -- child;
        grandparent --  "parent B";
      }`} /> 
    </div> */
}

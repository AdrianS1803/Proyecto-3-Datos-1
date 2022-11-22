import React from "react";
import { Graphviz } from "graphviz-react";

export function GrafoTesteo(props) {
  const re = "init -> make_string;"
  const da =  "main -> printf;"
  const tt = re+da
  
  const kk = "digraph G {A -> B;B -> C;}"
  let pp = props.grafo
  const bm = pp.toString()
    
  
  return (
    <>
      <h1>
        {pp}
      </h1>
      <h1>{bm}</h1>
      <Graphviz
        dot={props.yy}/>
    </>
  );
}

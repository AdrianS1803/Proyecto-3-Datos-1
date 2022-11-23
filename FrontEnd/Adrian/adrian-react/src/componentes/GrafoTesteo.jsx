import React from "react";
import { Graphviz } from "graphviz-react";

export function GrafoTesteo(props) {
  return (
    <>
      <Graphviz dot={props.grafo} />
    </>
  );
}

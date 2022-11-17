import React from "react";
import { Graphviz } from "graphviz-react";

export function Grafo(props) {
  /* const padre = "parent A";
  const lista = ["A", "B", "C"];
 */
  function eliminarGrafo(){
    alert(props.id)
  }

  let test = props.val
  return (
    <><Graphviz
      dot={test
       
      }

      /* `graph {
         grandparent -- ` +
        padre +
        `;
         child;
         "parent B" -- child;
         grandparent --  "parent B";
       }` */
    />
    <button onClick={eliminarGrafo}>Eliminar</button>
    </>
    
  );
}

/* ` digraph G {
  main -> parse -> execute;
  main -> init;
  main -> cleanup;
  execute -> make_string;
  execute -> printf
  init -> make_string;
  main -> printf;
  execute -> compare
  cleanup -> parse
  execute -> main;
  }` */

 /* `graph {
          grandparent -- `+lista[0]+`;
          "parent B" -- child;
          "grandparent" --  "parent B";
      }` */
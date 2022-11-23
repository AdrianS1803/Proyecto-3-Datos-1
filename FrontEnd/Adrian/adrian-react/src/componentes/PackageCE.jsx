import React from "react";
import { useState, useEffect } from "react";
import { Button, ProgressBar } from "react-bootstrap";

export function PackageCE(props) {
  const packageCE = props.packageCE;

  const [progress, setProgress] = useState(0);
  const maximo = (parseInt(packageCE.maxProgress)*10)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((oldProgress) => {
        const newProgress = oldProgress + 1;

        if ((newProgress > maximo+11) && (newProgress <= maximo+12)) {
          //clearInterval(interval);
          alert("Entrega acabada")
        }
        console.log(newProgress, maximo)
        return newProgress;
      });
    }, 1000);
  });

  return (
    <div>
      <h1>{packageCE.title}</h1>
      <p>{packageCE.description}</p>
      <progress value={progress} max={maximo} />
      <br></br>
      <Button onClick={() => props.deletePackageCE(packageCE.id)}>
        Eliminar
      </Button>
      {/* En ves de solo deleteTask seria con una funcion externa para evitar el problema de ()  */}
    </div>
  );
}

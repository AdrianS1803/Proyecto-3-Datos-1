import React from "react";
import { PackageCE } from "./PackageCE";

export function PackageCELista(props) {
  return (
    <div>
      {props.packageCEs.map((packageCE) => (
        <PackageCE key={packageCE.id} packageCE={packageCE} deletePackageCE={props.deletePackageCE} sumPendientes={props.sumPendientes} sumEntregados={props.sumEntregados}/>
      ))}
    </div>
  );
}

import React from "react";
import { useState, useEffect } from "react";

import { PackageCE } from "./PackageCE";

export function PackageCELista(props) {
  return (
    <div>
      {props.packageCEs.map((packageCE) => (
        <PackageCE key={packageCE.id} packageCE={packageCE} deletePackageCE={props.deletePackageCE} />
      ))}
    </div>
  );
}

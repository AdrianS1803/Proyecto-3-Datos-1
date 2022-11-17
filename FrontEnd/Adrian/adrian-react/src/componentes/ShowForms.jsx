import React from "react";
export function showForms(props) {
  return (
    <div>
      {props.tasks.map((task) => (
        <div key={task.id}>
        </div>
      ))}
    </div>
  );
}

import React from "react";
export function Test(props){
    if (props.test) {
      return(
        <h1>{props.test}</h1>  )
    }else{
        return(
            <></>  )
    }
    
    
}
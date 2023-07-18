import React from "react";

export default function Alert(props) {
    // setTimeout(() => {
    //   props.alert = null ;
    // }, 2000 );
    return (
    props.alert && <div>
      <div className="alert alert-primary" role="alert">
        <strong> {props.alert.typ} </strong>  {props.alert.msg}
      </div>
    </div>
  );
}

import React from "react";
import Inicio from "./Inicio";
import Registro from "./Registro";

class Inicyreg extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <Inicio />
        <Registro />
      </div>
    );
  }
}

export default Inicyreg;

import React from "react";
import "../styleiyr.css";
import fondo from "./img/fondo.png";

class Principal extends React.Component {
  render() {
    return (
      <div className="">
        <img src={fondo} className="rounded mx-auto d-block fondo" alt="..." />

        <div className="row">
          <div className="col-sm-4 col-md-4 col-lg-4 col"></div>
          <div className="col-sm-4 col-md-4 col-lg-4 col">
            <div className="d-flex justify-content-center">
              <a class="btn btn-Danger" href="Inicio" role="button">
                Login
              </a>
              <a class="btn btn-Danger" href="Registro" role="button">
                Sign in
              </a>
            </div>
          </div>
          <div className="col-sm-4 col-md-4 col-lg-4 col"></div>
        </div>
      </div>
    );
  }
}

export default Principal;

import React from "react";
import "../styleiyr.css";

class Inicio extends React.Component {
  render() {
    return (
      <div className="container-fluid" id="Inicio">
        <div className="row">
          <div className="col-sm-4 col-md-4 col-lg-4"></div>
          <div className="col-sm-4 col-md-4 col-lg-4 padre">
            <div className="row">
              <div className="col">
                <h3 className="titulo">Login</h3>
                <div className="form-row elementosInicio">
                  <div className="form-group text-center">
                    <label for="inputEmail4">Nickname</label>
                    <input
                      type="text"
                      className="form-control text-center inputTamano"
                      id="inputEmail4"
                    />
                  </div>
                </div>
                <div className="form-group text-center elementosInicio">
                  <label for="inputEmail4">Password</label>
                  <input
                    type="password"
                    className="form-control text-center inputTamano"
                    id="inputEmail4"
                  />
                </div>
                <button type="button" class="btn ">
                  <a href="body">Next</a>
                </button>
                <div className="row texto">
                  <p>
                    ¿Don't you have an account yet?{" "}
                    <a href="Registro">Click here and sign up.</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-4 col-md-4 col-lg-4"></div>
      </div>
    );
  }
}

export default Inicio;

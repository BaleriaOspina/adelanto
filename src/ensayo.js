import React from "react";

class Ensayo extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-3 col-md-3 col-lg-3"></div>
          <div className="col-sm-3 col-md-3 col-lg-3">
            <div className="row">
              <div className="col">
                <div className="form-row elementosInicio">
                  <div className="form-group text-center">
                    <label for="inputEmail4">Usuario</label>
                    <input
                      type="text"
                      className="form-control text-center inputTamano"
                      id="inputEmail4"
                    />
                  </div>
                </div>
                <div className="form-group text-center elementosInicio">
                  <label for="inputEmail4">Contraseña</label>
                  <input
                    type="password"
                    className="form-control text-center inputTamano"
                    id="inputEmail4"
                  />
                </div>
                <button type="button" class="btn btn-primary">
                  <a href="registro">Aceptar</a>
                </button>
              </div>
            </div>
          </div>

          <div class="col-sm-3 col-md-3 col-lg-3">
            <div className="row">
              <div className="col">
                <div className="form-row elementosInicio">
                  <div className="form-group text-center">
                    <label for="inputEmail4">Usuario</label>
                    <input
                      type="text"
                      className="form-control text-center inputTamano"
                      id="inputEmail4"
                    />
                  </div>
                </div>
                <div className="form-group text-center elementosInicio">
                  <label for="inputEmail4">Contraseña</label>
                  <input
                    type="password"
                    className="form-control text-center inputTamano"
                    id="inputEmail4"
                  />
                </div>
                <button type="button" class="btn btn-primary">
                  <a href="registro">Aceptar</a>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm-3 col-md-3 col-lg-3"></div>
      </div>
    );
  }
}

export default Ensayo;

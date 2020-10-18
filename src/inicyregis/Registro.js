import React from "react";
import "../styleiyr.css";

class Registro extends React.Component {
  render() {
    return (
      <div className="container-fluid" id="Registro">
        <div className="row">
          <div className="col-sm-4 col-md-4 col-lg-4"></div>
          <div className="col-sm-4 col-md-4 col-lg-4 padre">
            <h3 className="titulo">Sign in</h3>
            <div className="row">
              <div className="col">
                <div className="form-row elementosInicio">
                  <div className="form-group text-center">
                    <label for="inputEmail4">Name</label>
                    <input
                      type="text"
                      className="form-control text-center inputTamano"
                      id="inputEmail4"
                    />
                  </div>
                </div>

                <div className="form-row elementosInicio">
                  <div className="form-group text-center">
                    <label for="inputEmail4">Last name</label>
                    <input
                      type="text"
                      className="form-control text-center inputTamano"
                      id="inputEmail4"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label for="exampleInputEmail1">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>

                <div className="form-group text-center ">
                  <label for="inputEmail4">password</label>
                  <input
                    type="password"
                    className="form-control text-center inputTamano"
                    id="inputEmail4"
                  />
                </div>

                <button type="button" className="btn">
                  <a href="body">Next</a>
                </button>
                <div className="row texto">
                  <p>
                    I already have an account.{" "}
                    <a href="Registro">Click here and login.</a>
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

export default Registro;

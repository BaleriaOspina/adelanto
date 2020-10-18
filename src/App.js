import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Principal from "./principal/Principal";
import body from "./Menu/Componentes/body";
import Inicio from "./inicyregis/Inicio";
import Registro from "./inicyregis/Registro";
import Niveluno from "./nivelUno/Niveluno";
import Learn from "./Menu/Componentes/Learn";
import Ensayo from "./ensayo";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Principal} />
        <Route exact path="/body" component={body} />
        <Route exact path="/inicio" component={Inicio} />
        <Route exact path="/registro" component={Registro} />
        <Route exact path="/nivelUno" component={Niveluno} />
        <Route exact path="/learn" component={Learn} />
        <Route exact path="/ensayo" component={Ensayo} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;

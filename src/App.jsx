import React from "react";
import FormBootstrap from "./components/FormBootstrap";

function App() {
  return (
    <div className="container">
      <div className="row">
        <h1>Hola Mundo Forms</h1>
        <div className="card col-md-6 col-lg-6 col-sm-12 mt-3 p-3">
          <FormBootstrap/>
        </div>
        <div className="col-md-6 col-lg-6 col-sm-12 mt-3 p-3">
          Prueba 2
        </div>
      </div>
    </div>
  );
}

export default App;

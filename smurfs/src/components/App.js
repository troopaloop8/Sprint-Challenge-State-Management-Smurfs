import React, { Component } from "react";
import SmurfsList from "./SmurfsList";
import NewSmurfForm from "./NewSmurfForm";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="container notification is-dark">
        <h1 className="title ">SMURFS! 2.0 W/ Redux</h1>
        <div class="tile is-ancestor">
          <div class="tile is-4 is-vertical is-parent">
            <div class="tile is-child box">
              <NewSmurfForm />
            </div>
          </div>
          <div class="tile is-parent">
            <div class="tile is-child box">
              <SmurfsList />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

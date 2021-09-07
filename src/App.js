//import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";
import Realt from "./Components/Realt";

class App extends Component {
  state = {
    flats: [
      { addres: "Haanova 44", square: "72" },
      { addres: "Sustekova 7", square: "29" },
      { addres: "Guadamar", square: "61" },
    ],
    pageTitle: "RealEstate Agency",
    showFlats: false,
  };

  render() {
    let flats = null;

    if (this.state.showFlats) {
      flats = this.state.flats.map((f, i) => {
        return (
          <Realt
            name={f.addres}
            key={i}
            onChangeRealt={() => {
              this.setState({ pageTitle: "changed from " + f.addres });
            }}
          />
        );
      });
    }

    return (
      <div className='App'>
        <h1>{this.state.pageTitle}</h1>

        <button
          onClick={() => this.setState({ showFlats: !this.state.showFlats })}
        >
          {this.state.showFlats ? "Hide Flats" : "Show Flats"}
        </button>

        {flats}
      </div>
    );
  }
}

export default App;

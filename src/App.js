//import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";
import Realt from "./Components/Realt";

class App extends Component {
  state = {
    flats: [
      { address: "Haanova 44", square: "72" },
      { address: "Sustekova 7", square: "29" },
      { address: "Guadamar", square: "61" },
    ],
    pageTitle: "RealEstate Agency",
    showFlats: false,
  };
  handle(ind, newAddress) {
    const tempflats = [...this.state.flats];
    tempflats[ind].address = newAddress;
    this.setState({ flats: tempflats });
  }

  removeFlat(ind) {
    const temp = [...this.state.flats];
    temp.splice(ind, 1);
    this.setState({
      flats: temp,
    });
  }

  render() {
    let flats = null;

    if (this.state.showFlats) {
      flats = this.state.flats.map((f, i) => {
        return (
          <Realt
            name={f.address}
            key={i}
            changeFlatAddress={(event) => this.handle(i, event.target.value)}
            removeFlat={this.removeFlat.bind(this, i)}
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

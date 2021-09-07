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
  };

  handleButton = (newTitle) => {
    this.setState({ pageTitle: newTitle });
  };

  render() {
    console.log("Render");
    return (
      <div className='App'>
        <h1>{this.state.pageTitle}</h1>

        <input
          type='text'
          onChange={(e) => {
            this.setState({ pageTitle: e.target.value });
          }}
        />
        <button onClick={this.handleButton.bind(this, "(changed by main btn)")}>
          Changer
        </button>
        <Realt
          name={this.state.flats[0].addres}
          onChangeRealt={this.handleButton}
        ></Realt>
        <Realt
          name={this.state.flats[1].addres}
          onChangeRealt={() => {
            this.handleButton(this.state.flats[1].addres);
          }}
        ></Realt>
        <Realt
          name={this.state.flats[2].addres}
          onChangeRealt={this.handleButton}
        ></Realt>
      </div>
    );
  }
}

export default App;

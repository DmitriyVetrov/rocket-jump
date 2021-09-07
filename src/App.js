//import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";
import Realt from "./Components/Realt";

class App extends Component {
  state = {
    flats: [
      { addres: "Haanova 44", square: "72" },
      { addres: "Sustekova 7", square: "29" },
      { addres: "Guadamar", square: "61" },
    ],
  };

  handleButton() {
    console.log("clicked");
  }

  render() {
    return (
      <>
        <button
          onKeyUp={() => {
            console.log("feature");
          }}
        >
          Changer
        </button>
        <Realt name={this.state.flats[0].addres}></Realt>
        <Realt name={this.state.flats[1].addres}></Realt>
        <Realt name={this.state.flats[2].addres}></Realt>
      </>
    );
  }
}

export default App;

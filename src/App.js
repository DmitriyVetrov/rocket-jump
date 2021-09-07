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

  handleButton = () => {
    console.log(1);
    const oldTitle = this.state.pageTitle;
    const newTitle = oldTitle + " (changed)";
    this.setState({ pageTitle: newTitle });
  };

  render() {
    console.log("Render");
    return (
      <div className='App'>
        <h1>{this.state.pageTitle.toString()}</h1>

        <button onClick={this.handleButton}>Changer</button>
        <Realt name={this.state.flats[0].addres}></Realt>
        <Realt name={this.state.flats[1].addres}></Realt>
        <Realt name={this.state.flats[2].addres}></Realt>
      </div>
    );
  }
}

export default App;

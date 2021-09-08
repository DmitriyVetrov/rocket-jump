import React, { Component } from "react";
import Quiz from "./Containers/Quiz/Quiz";
import Layout from "./hoc/Layout/Layout";

class App extends Component {
  render() {
    return (
      <Layout>
        <Quiz></Quiz>
      </Layout>
    );
  }
}

export default App;

import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    numbers: 0,
  };

  increaseNumber = () => {
    // let num = numbers++
    this.setState({
      numbers: this.state.numbers + 1,
    });
  };

  decreaseNumber = () => {
    // let num = numbers++
    this.setState({
      numbers: this.state.numbers - 1,
    });
  };

  render() {
    return (
      <div className="app">
        <h1>{this.state.numbers}</h1>
        <button onClick={this.increaseNumber}>Increase Me</button>
        <button onClick={this.decreaseNumber}>Decrease Me</button>
      </div>
    );
  }
}
export default App;

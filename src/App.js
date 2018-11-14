import React, { Component } from "react";
import NavBar from "./components/navbar";
import Counters from "./components/counters";

import "./App.css";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 3 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };

  handleDecrement = counterValue => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counterValue);
    counters[index] = { ...counterValue };
    counters[index].value--;
    this.setState({ counters });
  };

  handleIncrement = counterValue => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counterValue);
    counters[index] = { ...counterValue };
    counters[index].value++;
    this.setState({ counters });
  };

  handleDelete = counterID => {
    const counters = this.state.counters.filter(c => c.id !== counterID);
    this.setState({ counters });
  };

  resetCounters = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  render() {
    return (
      <React.Fragment>
        <NavBar
          totalCounters={this.state.counters.filter(c => c.value > 0).length}
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.resetCounters}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onDelete={this.handleDelete}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;

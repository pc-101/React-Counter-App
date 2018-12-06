import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/navbar";
import Counters from "./components/counters";

class App extends Component {
  state = {
    counters: [{ id: 1, value: 4 }, { id: 2, value: 0 }, { id: 3, value: 0 }, { id: 4, value: 0 }]
  };

  constructor() {
    super();
    console.log("App - Constructor");
  }

  componentDidMount() {
    // Good place to do fetch/ajax calls and set the state from that data
    console.log("App - Mounted");
  }

  handleDelete = (id) => {
    const counters = this.state.counters.filter((c) => c.id !== id);
    this.setState({ counters });
  };

  handleIncrement = (counter) => {
    // Clone state via shallow copy
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);

    // Due to cloning being shallow, counters[index] still references the original this.state.counters[index], so we'll need to replace it with this *new* object (hence destructuring).
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  handleDecrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);

    counters[index] = { ...counter };
    counters[index].value--;
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };
  render() {
    console.log("App - Rendered");
    return (
      <React.Fragment>
        <NavBar totalCounters={this.state.counters.filter((c) => c.value > 0).length} />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onReset={this.handleReset}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;

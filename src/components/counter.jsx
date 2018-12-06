import React, { Component } from "react";

class Counter extends Component {
  // imageUrl: "https://picsum.photos/200"

  // Pass this object in the style={} attribute for inline-styling
  styles = {
    fontSize: 10,
    fontWeight: "bold"
  };

  // Use to check a condition for update and make updates as necessary in order to optimize performance
  componentDidUpdate(prevProps, prevState) {
    console.log(prevProps);
    console.log(prevState);

    if (prevProps.counter.value !== this.props.counter.value) {
      // Do some expensive operation, like http call to server
    }
  }

  // Clean up anything to prevent memory leaks
  componentWillUnmount() {
    console.log("Counter - Unmount");
  }

  render() {
    return (
      <div className="row">
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="col-1 m-1 btn btn-secondary btn-sm"
        >
          +
        </button>
        <button
          onClick={() => this.props.onDecrement(this.props.counter)}
          className="col-1 m-1 btn btn-secondary btn-sm"
          disabled={this.props.counter.value === 0 ? "true" : ""}
        >
          -
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="col-1 m-1 btn btn-danger btn-sm"
        >
          x
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "col-1 badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";

    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;

    return value === 0 ? "Zero" : value;
  }
}

export default Counter;

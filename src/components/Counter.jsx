import React, { Component } from "react";
import "./Counter.css";

export default class Counter extends Component {
  static defaultProps = {
    initialValue: 0,
    step: 1,
  };

  state = {
    value: this.props.initialValue,
  };

  increment = () => this.setState(({ value }) => ({ value: value + 1 }));

  decrement = () => this.setState(({ value }) => ({ value: value - 1 }));

  render() {
    const { value } = this.state;
    const { step } = this.props;

    return (
      <div className="Counter">
        <span className="Counter__value">{value}</span>

        <div className="Counter__controls">
          <button type="button" onClick={this.increment}>
            Увеличить на {step}
          </button>
          <button type="button" onClick={this.decrement}>
            Уменьшить на {step}
          </button>
        </div>
      </div>
    );
  }
}

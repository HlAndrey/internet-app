import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      num1: 0,
      num2: 0,
      operator: '+',
      result: 0,
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  calculate = () => {
    const { num1, num2, operator } = this.state;
    switch (operator) {
      case '+':
        this.setState({ result: parseFloat(num1) + parseFloat(num2) });
        break;
      case '-':
        this.setState({ result: parseFloat(num1) - parseFloat(num2) });
        break;
      case '*':
        this.setState({ result: parseFloat(num1) * parseFloat(num2) });
        break;
      case '/':
        this.setState({ result: parseFloat(num1) / parseFloat(num2) });
        break;
      default:
        this.setState({ result: 'Invalid operator' });
    }
  };

  render() {
    return (
      <div>
        <h1>Calculator</h1>
        <input
          type="number"
          name="num1"
          value={this.state.num1}
          onChange={this.handleChange}
        />
        <select
          name="operator"
          value={this.state.operator}
          onChange={this.handleChange}
        >
          <option value="+">+</option>
          <option value="-">-</option>
          <option value="*">*</option>
          <option value="/">/</option>
        </select>
        <input
          type="number"
          name="num2"
          value={this.state.num2}
          onChange={this.handleChange}
        />
        <button onClick={this.calculate}>=</button>
        <p>Result: {this.state.result}</p>
      </div>
    );
  }
}

export default App;

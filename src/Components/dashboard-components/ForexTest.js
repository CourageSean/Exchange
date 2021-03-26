import React from "react";
import { useState, useEffect } from "react";
import Axios from "axios";

class ForexTest extends React.Component {
  constructor(props) {
    super(props);

    this.state = { currency1: "USD", currency2: "EUR", inputV: "" };
  }

  handleCurrency1 = (event) => {
    const value = event.target.value;
    this.setState(
      {
        currency1: value,
      },
      console.log("1", this.state.currency1)
    );
  };

  handleCurrency2 = (event) => {
    this.setState({
      currency2: event.target.value,
    });
    console.log("2", this.state.currency2);
  };

  handleInput = (event) => {
    this.setState({
      inputV: event.target.value,
    });
  };

  call = () => {
    Axios.get(
      `https://www.alphavantage.co/query?function=FX_DAILY&from_symbol=${this.state.currency1}&to_symbol=${this.state.currency2}&apikey=XIMAFP8KCJHEHLNU`
    ).then((response) => {
      console.log(this.state.currency1, this.state.currency2);
    });
  };

  // const [currency1, setCurrency1] = useState("EUR");
  // const [currency2, setCurrency2] = useState("USD");
  // const [inputValue, setInputValue] = "4";
  // const [change, setChange] = useState(false);

  render() {
    return (
      <div>
        <select
          value={this.state.currency1}
          name=""
          id=""
          onChange={this.handleCurrency1}
        >
          <option value="EUR">EUR</option>
          <option value="USD">USD</option>
          <option value="CNY">YUAN</option>
        </select>
        <select
          name=""
          id=""
          onChange={(event) => {
            this.handleCurrency2(event);
          }}
        >
          <option value="EUR">EUR</option>
          <option value="USD">USD</option>
          <option value="CNY">YUAN</option>
        </select>
        <input type="number" onChange={this.handleInput} />
        <input type="button" value="change" onClick={this.call} />
      </div>
    );
  }
}

export default ForexTest;

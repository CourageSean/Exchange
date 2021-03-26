import React, { Component } from "react";
import Axios from "axios";

class Forex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currency1: "USD",
      currency2: "EUR",
      inputValue: "",
      result: "",
    };
  }
  handleCurrency1 = (event) => {
    this.setState(
      {
        currency1: event.target.value,
      },
      () => console.log(this.state.currency1)
    );
  };
  handleCurrency2 = (event) => {
    this.setState(
      {
        currency2: event.target.value,
      },
      () => console.log(this.state.currency2)
    );
  };
  handleInput = (event) => {
    this.setState({
      inputValue: (event.target.value),
    }
    );
  };
  call = () => {
    Axios.get(
      `https://www.alphavantage.co/query?function=FX_DAILY&from_symbol=${this.state.currency1}&to_symbol=${this.state.currency2}&apikey=XIMAFP8KCJHEHLNU`
    ).then((response) => {
      console.log(response.data);
      this.setState({
        result:
          Number(
            response.data["Time Series FX (Daily)"]["2021-03-24"]["4. close"]
          ) * this.state.inputValue,
      });
      console.log((this.state.result));
    });
  };
  render() {
    return (
      <section id="forex">
        <div className="container">
          <div className="header">
            <h1 className="title">Forex</h1>
            <p className="para">Want to know,how much is your money in other currenciest?</p>
          </div>
          <div className="main">
            <div className="betrag">
              <select
                value={this.state.currency1}
                name=""
                id="currency1"
                onChange={this.handleCurrency1}
              >
                <option value="EUR" >EUR</option>
                <option value="USD" >USD</option>
                <option value="CNY" >YUAN</option>
                <option value="PHP" >PHP</option>
                <option value="AUD" >AUD</option>
              </select>


              <select
                name=""
                id="currency1"
                onChange={(event) => {
                  this.handleCurrency2(event);
                }}
              >
                <option value="EUR">EUR</option>
                <option value="USD">USD</option>
                <option value="CNY">YUAN</option>
                <option value="PHP">PHP</option>
                <option value="AUD">AUD</option>
              </select>
            </div>
            <br />
            <div className="ergebnis">
              <i class="las la-chart-pie"></i>
              <input id="input-button" type="number" onChange={this.handleInput} />
              <br />
              <input type="button" id="button" className="coolBeans" value="Exchange" onClick={this.call} />
              <br />
              <h2 className="date">Der Aktuelle Wechselkurs von {this.state.currency1} zu {this.state.currency2} ist</h2>
              <h1 className="result">{this.state.result}</h1>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Forex;


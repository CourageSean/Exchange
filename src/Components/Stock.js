import React, { Component } from 'react'
import Plot from 'react-plotly.js';
import axios from 'axios'

class Stock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stockName: "FB",
      stockChartXValues: [],
      stockChartYValues: [],
      inputValue: '',
    }
  }

  componentDidMount() {

    let stockChartXValues_1 = [];
    let stockChartYValues_1 = [];
    const API_KEY = 'HGJWFG4N8AQ66ICD';

    axios.get(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${this.state.stockName}&outputsize=compact&apikey=${API_KEY}`)
      .then(response => {
        console.log(response.data);
        for (let key in response.data["Time Series (Daily)"]) {
          stockChartXValues_1.push(key)
          stockChartYValues_1.push(response.data["Time Series (Daily)"][key]["4. close"])
        }
        this.setState({
          stockChartXValues: stockChartXValues_1,
          stockChartYValues: stockChartYValues_1,
          stockName: response.data["Meta Data"]["2. Symbol"],
        });
      })
  }

  handleDropdownChange = (event) => {
    this.setState({ stockName: event.target.value }, () => {
      let stockChartXValues_1 = [];
      let stockChartYValues_1 = [];
      const API_KEY = 'HGJWFG4N8AQ66ICD';
      axios.get(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${this.state.stockName}&outputsize=compact&apikey=${API_KEY}`)
        .then(response => {
          console.log(response.data);
          for (let key in response.data["Time Series (Daily)"]) {
            stockChartXValues_1.push(key)
            stockChartYValues_1.push(response.data["Time Series (Daily)"][key]["4. close"])
          }
          this.setState({
            stockChartXValues: stockChartXValues_1,
            stockChartYValues: stockChartYValues_1,
            stockName: response.data["Meta Data"]["2. Symbol"],
          });
        })
    }
    );
  }
  handleChangeFirma = (event) => {

    this.setState({ inputValue: event.target.previousSibling.value }, () => {
      const API_KEY = 'HGJWFG4N8AQ66ICD';
      console.log(this.state.inputValue.toUpperCase());
      let searchCrDataX_1 = []
      let searchCrDataY_1 = []
      axios.get(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${this.state.inputValue.toUpperCase()}&outputsize=compact&apikey=${API_KEY}`)
        .then(response => {
          for (let key in response.data["Time Series (Daily)"]) {
            searchCrDataX_1.push(key)
            searchCrDataY_1.push(response.data["Time Series (Daily)"][key]["4. close"])
          }
          this.setState({
            stockChartXValues: searchCrDataX_1,
            stockChartYValues: searchCrDataY_1,
            stockName: response.data["Meta Data"]["2. Symbol"],
          });
        })
    }
    );
  }

  render() {
    return (
      <section id="stock">
        <form>
          <input type="search" placeholder="Currency Code" />
          <i onClick={this.handleChangeFirma} className="fa fa-search"></i>
        </form>
        <div id="stock_div">
          <select id="dropdown" onChange={this.handleDropdownChange} value={this.state.selectValue} >
            <option value="FB">Facebook</option>
            <option value="AMZN">Amazon</option>
            <option value="EBAY">Ebay</option>
            <option value="TLO">Tesla</option>
            <option value="DAI">Mercedes Benz</option>
            <option value="BMW">BMW</option>
            <option value="AHLA">Alibaba</option>
            <option value="ABEA">Google Alphabet</option>
          </select>
          <div>
            <h1 id="title-stock">Stock</h1>
            <p className="my-para" >
              With all of the styling tool options available in today’s market</p>
          </div>
          <div id="selected-result"><h1>{this.state.stockName}</h1></div>
          <div id="plot-container">
            <Plot
              id={this.plot}

              data={[
                {
                  x: this.state.stockChartXValues,
                  y: this.state.stockChartYValues,
                  type: 'scatter',
                  mode: 'gauge+delta',
                  marker: { color: '#2CD6B4' },
                }
              ]}
              layout={{
                font: { size: 12, color: '#F0F0F1' },
                width: 720, height: 390, plot_bgcolor: "#27293D",
                paper_bgcolor: "#27293D", xaxis: {
                  title: 'MONTH/YEAR'
                },
                yaxis: {
                  title: 'Euro'
                }
              }}
            />

          </div>
        </div>

      </section>
    );
  }
}

export default Stock;

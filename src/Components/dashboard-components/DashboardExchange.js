import React from "react";
import { useState, useEffect } from "react";
import Axios from "axios";
import {motion} from "framer-motion"

const Apis = [
  "0WBEFUGJFRATQ458",
  "QFCCFJSBUBFB2P6T",
  "74TMAV2JMBDMC6PA",
  "YATE4PV70EJGIZSU",
  " ZHJV5O1WC8KQE6JG",
];
function DashboardExchange(props) {
  const usdShort = "USD";
  const eurShort = "EUR";
  const cnyShort = "CNY";

  const [usd, setUsd] = useState(null);
  const [eur, setEur] = useState(null);
  const [cny, setCny] = useState(null);
  const [eurUsd, setEurUsd] = useState(null);
  const [cnyEur, setCnyEur] = useState(null);
  const [cnyUsd, setCnyUsd] = useState(null);
  const [eurCny, setEurCny] = useState(null);

  useEffect((props) => {
    const test = [];

    Axios.get(
      `https://www.alphavantage.co/query?function=FX_MONTHLY&from_symbol=${usdShort}&to_symbol=${eurShort}&apikey=WASLX9XSH9KER05U`
    ).then((response) => {
      setUsd(
        // response.data["Time Series FX (Monthly)"]["2021-03-25"]["4. close"]
      );
      console.log(response.data);
    });
  }, []);

  // useEffect((props) => {
  //   Axios.get(
  //     `https://www.alphavantage.co/query?function=FX_MONTHLY&from_symbol=${usdShort}&to_symbol=${cnyShort}&apikey= ZHJV5O1WC8KQE6JG`
  //   ).then((response) => {
  //     console.log(response.data);
  //     setCny(
  //       response.data["Time Series FX (Monthly)"]["2021-03-25"]["1. open"]
  //     );
  //   });
  // }, []);

  // useEffect((props) => {
  //   Axios.get(
  //     `https://www.alphavantage.co/query?function=FX_MONTHLY&from_symbol=EUR&to_symbol=USD&apikey=demo`
  //   ).then((response) => {
  //     console.log(response.data);
  //     setEurUsd(
  //       response.data["Time Series FX (Monthly)"]["2021-03-25"]["1. open"]
  //     );
  //   });
  // }, []);

  // useEffect((props) => {
  //   Axios.get(
  //     `https://www.alphavantage.co/query?function=FX_MONTHLY&from_symbol=${cnyShort}&to_symbol=${usdShort}&apikey=QFCCFJSBUBFB2P6T`
  //   ).then((response) => {
  //     console.log(response.data);
  //     setCnyUsd(
  //       response.data["Time Series FX (Monthly)"]["2021-03-25"]["1. open"]
  //     );
  //   });
  // }, []);

  // useEffect((props) => {
  //   Axios.get(
  //     `https://www.alphavantage.co/query?function=FX_MONTHLY&from_symbol=${cnyShort}&to_symbol=${eurShort}&apikey=YATE4PV70EJGIZSU`
  //   ).then((response) => {
  //     console.log(response.data);
  //     setCnyEur(
  //       response.data["Time Series FX (Monthly)"]["2021-03-25"]["1. open"]
  //     );
  //   });
  // }, []);

  // useEffect((props) => {
  //   Axios.get(
  //     `https://www.alphavantage.co/query?function=FX_MONTHLY&from_symbol=${eurShort}&to_symbol=${cnyShort}&apikey=74TMAV2JMBDMC6PA`
  //   ).then((response) => {
  //     console.log(response.data);
  //     setEurCny(
  //       response.data["Time Series FX (Monthly)"]["2021-03-25"]["1. open"]
  //     );
  //   });
  // }, []);

  return (
    <motion.div className="exchange-container"
    initial={{x:-60,y:55, opacity:0}}
    animate={{x:0,y:-15,opacity:1}}
    transition={{delay:0.5,duration:1.3}}>
      <table class="table table-dark">
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col">
              {" "}
              <img id="usaImg" src="/images/usa1.png" alt="" />
              USD
            </th>
            <th scope="col">
              <img src="/images/eur1.png" alt="" />
              EUR
            </th>
            <th scope="col">
              <img src="/images/china.png" alt="" />
              CNY
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">
              <img id="usaImg2" src="/images/usa1.png" alt="" />
              USD
            </th>
            <td> 1$</td>
            <td>1.8003</td>
            <td>6,54</td>
          </tr>
          <tr>
            <th scope="row">
              <img src="/images/eur1.png" alt="" />
              EUR
            </th>
            <td> 1.18</td>
            <td>1€</td>
            <td>7,71</td>
          </tr>
          <tr>
            <th scope="row">
              <img id="chinaImg" src="/images/china.png" alt="" />
              CNY
            </th>
            <td>0,15 </td>
            <td>0.13</td>
            <td>1¥</td>
          </tr>
        </tbody>
      </table>
      
    </motion.div>
  );
}

export default DashboardExchange;

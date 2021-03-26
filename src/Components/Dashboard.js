import React from "react";
import { useState, useEffect } from "react";

import DashboardStock from "./dashboard-components/DashboardStock";
import DashboardCryptoStock from "./dashboard-components/DashboardCryptoStock";
import DashboardExchange from "./dashboard-components/DashboardExchange";
import Axios from "axios";
import DashboardNews from "./dashboard-components/DashboardNews";
import "./dashboard-components/Dashboard.css";
import { motion } from "framer-motion"

const apiList = ["BBFAIK97VXIR92KK", "0RLODS0QNRQX112V", "ZHJV5O1WC8KQE6JG"];

function Dashboard(props) {
  const [dataStock, setDataStock] = useState(null);
  const [dataStock1, setDataStock1] = useState(null);
  const [dataStock2, setDataStock2] = useState(null);
  const [dataStock3, setDataStock3] = useState(null);
  const [cryptoStock, setCryptoStock] = useState(null);
  const [cryptoStock1, setCryptoStock1] = useState(null);
  const [cryptoStock2, setCryptoStock2] = useState(null);
  const [cryptoStock3, setCryptoStock3] = useState(null);
  // const bitcoin = "BTC";
  // const etherium = "ETH";
  // const ripple = "XRP";
  // const binance = "BNB";
  const microsoft = "msft";
  // const tesla = "tsla";
  // const nike = "nke";

  useEffect((props) => {
    Axios.get(
      `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${microsoft}&apikey=4NR58PGCYNXVBISR`
    ).then((response) => {
      setDataStock(response.data);
      console.log(response.data);
    });
  }, []);
  //www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${microsoft}&apikey=demo

  // useEffect((props) => {
  //   Axios.get(
  //     `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${tesla}&apikey=BBFAIK97VXIR92KK`
  //   ).then((response) => {
  //     setDataStock1(response.data);
  //     console.log(response.data);
  //   });
  // }, []);

  // useEffect((props) => {
  //   Axios.get(
  //     `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${nike}&apikey=ZHJV5O1WC8KQE6JG`
  //   ).then((response) => {
  //     setDataStock2(response.data);
  //     console.log(response.data);
  //   });
  // }, []);

  // useEffect((props) => {
  //   Axios.get(
  //     `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=IBM&apikey=demo`
  //   ).then((response) => {
  //     setDataStock3(response.data);
  //     console.log(response.data);
  //   });
  // }, []);

  useEffect((props) => {
    Axios.get(
      `https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_MONTHLY&symbol=BTC&market=CNY&apikey=5L9AJNFRZZ6RX5KK`
    ).then((response) => {
      setCryptoStock(response.data);
      console.log(response.data);
    });
  }, []);

  // useEffect((props) => {
  //   Axios.get(
  //     `https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_MONTHLY&symbol=${etherium}&market=CNY&apikey=AG4FEQWG8I6QKWCV`
  //   ).then((response) => {
  //     setCryptoStock1(response.data);
  //     console.log(response.data);
  //   });
  // }, []);

  // useEffect((props) => {
  //   Axios.get(
  //     `https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_MONTHLY&symbol=${binance}&market=CNY&apikey=LMNC3JTPQ008HLBX`
  //   ).then((response) => {
  //     setCryptoStock2(response.data);
  //     console.log(response.data);
  //   });
  // }, []);

  // useEffect((props) => {
  //   Axios.get(
  //     `https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_MONTHLY&symbol=${ripple}&market=CNY&apikey=WASLX9XSH9KER05U`
  //   ).then((response) => {
  //     setCryptoStock3(response.data);
  //     console.log(response.data);
  //   });
  // }, []);

  //0RLODS0QNRQX112V
  return (
    <motion.section id="dashboard" 
    // variants={{exit:{x:"-100",transition:{ease:"easeInOut"}}}}
    initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        exit={{ x: "-100vw", transition: { ease: "easeInOut" } }}
        transition={{ duration: 0.5 }}
    >

      <div className="dashboard-wrapper"
      >
        <motion.div initial={{y:-250},{opacity:0}}
      animate={{y:10},{opacity:1}}>
        <h3 id="dashboard-header">Dashboard</h3>
        </motion.div>
        <div className="dashboard-firstRow">
          {
            <DashboardStock
              infoStock={dataStock}
              infoStock1={dataStock1}
              infoStock3={dataStock3}
              infoStock2={dataStock2}
            />
          }
          {
            <DashboardCryptoStock
              infoCrypto={cryptoStock}
              infoCrypto1={cryptoStock1}
              infoCrypto2={cryptoStock2}
              infoCrypto3={cryptoStock3}
            />
          }
        </div>

        <div className="dashboard-thirdRow">
          <div id="ex">
            <DashboardExchange />
            <DashboardNews />
          </div>
        </div>
        
      </div>
    </motion.section>
  );
}

export default Dashboard;

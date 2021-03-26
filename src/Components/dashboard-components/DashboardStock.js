import React from "react";
import { motion } from "framer-motion"

const stockList = [];

function DashboardStock(props) {
  return (
    <motion.div className="stock-container"
    initial={{x:-60,y:-55, opacity:0}}
    animate={{x:0,y:0,opacity:1}}
    transition={{delay:0.5,duration:1.3}}>
      <table class="table  table-dark">
        <thead>
          <tr>
            <th scope="col">Symbol</th>
            <th scope="col"></th>
            <th scope="col">Stock</th>
            <th scope="col">Market</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">
              <img className="stockimg" src="/images/microsoft.png" alt="" />{" "}
            </th>
            <td> Microsoft</td>
            <td>
              {/* {props.infoStock && props.infoStock["Global Quote"]["05. price"]} */}
              196.50
            </td>
            <td>
              {" "}
              {/* {props.infoStock1 &&
                props.infoStock1["Global Quote"]["10. change percent"]} */}
              -0.33%
            </td>
          </tr>
          <tr>
            <th scope="row">
              {" "}
              <img className="stockimg" src="/images/tesla.png" alt="" />
            </th>
            <td> Tesla</td>
            <td>
              {/* {" "}
              {props.infoStock1 &&
                props.infoStock1["Global Quote"]["05. price"]} */}
              540.80
            </td>
            <td>
              {/* {" "}
              {props.infoStock1 &&
                props.infoStock1["Global Quote"]["10. change percent"]} */}
              -0.15%
            </td>
          </tr>
          <tr>
            <th scope="row">
              {" "}
              <img className="stockimg" src="/images/ibm.png" alt="" />
            </th>
            <td>IBM</td>
            <td>
              {/* {" "}
              {props.infoStock3 &&
                props.infoStock3["Global Quote"]["05. price"]} */}
              133.00
            </td>
            <td>
              {/* {" "}
              {props.infoStock3 &&
                props.infoStock3["Global Quote"]["10. change percent"]} */}
              0.15%
            </td>
          </tr>
          <tr>
            <th scope="row">
              {" "}
              <img className="stockimg" src="/images/nike.png" alt="" />
            </th>
            <td> Nike</td>
            <td>
              {/* {props.infoStock2 &&
                props.infoStock2["Global Quote"]["05. price"]} */}
              110.00
            </td>
            <td>
              {/* {props.infoStock2 &&
                props.infoStock2["Global Quote"]["10. change percent"]} */}
              1.75%
            </td>
          </tr>
        </tbody>
      </table>
      
    </motion.div>
  );
}

export default DashboardStock;

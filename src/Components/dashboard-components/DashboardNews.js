import React, { useState, useEffect } from "react";
import Axios from "axios";
import Carousel from "./Carousel";
import {motion} from "framer-motion"
const kia = "5d4159eb77a44bb7931929ddaca74047";

function DashboardNews(props) {
  // useEffect((props) => {
  //   Axios.get(
  //     `https://newsapi.org/v2/top-headlines?country=de&category=business&apiKey=5d4159eb77a44bb7931929ddaca74047`
  //   ).then((response) => {
  //     console.log(response.data);
  //   });
  // }, []);
  return (
    <motion.div 
    //  initial={{x:60,y:55, opacity:0}}
    //  animate={{x:0,y:0,opacity:1}}
    //  transition={{delay:0.5,duration:1.3}}
    animate={{ scaleY: 1 }}
    exit={{ x: "-100vw", transition: { ease: "easeInOut" } }}
    transition={{ duration: 0.5 }}
    >
      <Carousel />
    </motion.div>
  );
}

export default DashboardNews;

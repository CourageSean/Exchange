import React, { Component } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import Axios from "axios";

export default class SimpleSlider extends Component {
  state = {
    background1: null,
  };

  componentDidMount() {
    Axios.get(
      `https://newsapi.org/v2/top-headlines?country=de&category=business&apiKey=5d4159eb77a44bb7931929ddaca74047`
    ).then((response) => {
      this.setState({ background1: response.data });
      // this.setState({ backgroundImg: response.data.articles[0].urlToImage });
      console.log(response.data);
    });
  }

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
    };

    return (
      <div className="news-container">
        <h3 className="news-header"> Nachrichten</h3>
        <Slider {...settings}>
          <div>
            <a
              href={
                this.state.background1 && this.state.background1.articles[0].url
              }
              className="links"
            >
              <div
                className="newsOne"
                style={
                  this.state.background1 && {
                    backgroundImage:
                      "url(" +
                      this.state.background1.articles[0].urlToImage +
                      ")",
                    backgroundSize: "cover",
                    backgroundRepeate: "no-repeat",
                    backgroundPosition: "center",
                  }
                }
              >
                <p className="newsHeader">
                  {this.state.background1 &&
                    this.state.background1.articles[0].title}{" "}
                </p>
              </div>
            </a>
          </div>

          <div>
            <a
              href={
                this.state.background1 && this.state.background1.articles[5].url
              }
              className="links"
            >
              <div
                className="newsOne"
                style={
                  this.state.background1 && {
                    backgroundImage:
                      "url(" +
                      this.state.background1.articles[5].urlToImage +
                      ")",
                    backgroundSize: "cover",
                    backgroundRepeate: "no-repeat",
                  }
                }
              >
                <p className="newsHeader">
                  {this.state.background1 &&
                    this.state.background1.articles[5].title}{" "}
                </p>
              </div>
            </a>
          </div>
          <div>
            <a
              href={
                this.state.background1 && this.state.background1.articles[6].url
              }
              className="links"
            >
              <div
                className="newsOne"
                style={
                  this.state.background1 && {
                    backgroundImage:
                      "url(" +
                      this.state.background1.articles[6].urlToImage +
                      ")",
                    backgroundSize: "cover",
                    backgroundRepeate: "no-repeat",
                  }
                }
              >
                <p className="newsHeader">
                  {this.state.background1 &&
                    this.state.background1.articles[6].title}{" "}
                </p>
              </div>
            </a>
          </div>
        </Slider>
      </div>
    );
  }
}

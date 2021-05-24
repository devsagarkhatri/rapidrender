import React, { Component } from "react";

import "./blob.css";
import Grid from "./grid.jsx";

class Blob extends Component {
  state = {
    range: 45,
    isClick: false,
    topLeftX: 10,
    topLeftY: 10,
    topRightX: 0,
    topRightY: 0,
    bottomLeftX: 10,
    bottomLeftY: 10,
    bottomRightX: 0,
    bottomRightY: 0,
    gradient: 0,
    color: "",
    color1: "",
    color2: "",
  };

  handleSlide(event, val) {
    switch (event) {
      case "top-left-x":
        this.setState({ topLeftX: val });
        break;
      case "top-left-y":
        this.setState({ topLeftY: val });
        break;
      case "top-right-x":
        this.setState({ topRightX: val });
        break;
      case "top-right-y":
        this.setState({ topRightY: val });
        break;
      case "bottom-left-x":
        this.setState({ bottomLeftX: val });
        break;
      case "bottom-left-y":
        this.setState({ bottomLeftY: val });
        break;
      case "bottom-right-x":
        this.setState({ bottomRightX: val });
        break;
      case "bottom-right-y":
        this.setState({ bottomRightY: val });
        break;
      default:
        this.setState({ range: val });
        break;
    }
  }

  isClicked = () => {
    this.setState({ isClick: true });
  };

  render() {
    return (
      <div className="container-fluid  bg-transparent">
        <br />
        <div className="container">
          <Grid
            range={this.state.range}
            topLeftX={this.state.topLeftX}
            topRightX={this.state.topRightX}
            bottomLeftX={this.state.bottomLeftX}
            bottomRightX={this.state.bottomRightX}
            topLeftY={this.state.topLeftY}
            topRightY={this.state.topRightY}
            bottomLeftY={this.state.bottomLeftY}
            bottomRightY={this.state.bottomRightY}
          />
          <br />
          <br />
          <table className="table table-hover slidecontainer">
            <thead>
              <tr>
                <th></th>
                <th colSpan="2" className="text-center">
                  X
                </th>
                <th colSpan="2" className="text-center">
                  Y
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Top Left</td>
                <td>
                  <div className="slidecontainer">
                    <input
                      type="range"
                      min="0"
                      max="100"
                      className="slider"
                      id="myRange11"
                      defaultValue={this.state.topLeftX}
                      onChange={(event) =>
                        this.handleSlide("top-left-x", event.target.value)
                      }
                    />
                  </div>
                </td>
                <td>{this.state.topLeftX}%</td>
                <td>
                  <div className="slidecontainer">
                    <input
                      type="range"
                      min="0"
                      max="100"
                      className="slider"
                      id="myRange11"
                      defaultValue={this.state.topLeftY}
                      onChange={(event) =>
                        this.handleSlide("top-left-y", event.target.value)
                      }
                    />
                  </div>
                </td>
                <td>{this.state.topLeftY}%</td>
              </tr>
              <tr>
                <td>Top Right</td>
                <td>
                  <div className="slidecontainer">
                    <input
                      type="range"
                      min="0"
                      max="100"
                      className="slider"
                      id="myRange11"
                      defaultValue={this.state.topRightX}
                      onChange={(event) =>
                        this.handleSlide("top-right-x", event.target.value)
                      }
                    />
                  </div>
                </td>
                <td>{this.state.topRightX}%</td>
                <td>
                  <div className="slidecontainer">
                    <input
                      type="range"
                      min="0"
                      max="100"
                      className="slider"
                      id="myRange11"
                      defaultValue={this.state.topRightY}
                      onChange={(event) =>
                        this.handleSlide("top-right-y", event.target.value)
                      }
                    />
                  </div>
                </td>
                <td>{this.state.topRightY}%</td>
              </tr>
              <tr>
                <td>Bottom Left</td>
                <td>
                  <div className="slidecontainer">
                    <input
                      type="range"
                      min="0"
                      max="100"
                      className="slider"
                      id="myRange11"
                      defaultValue={this.state.bottomLeftX}
                      onChange={(event) =>
                        this.handleSlide("bottom-left-x", event.target.value)
                      }
                    />
                  </div>
                </td>
                <td>{this.state.bottomLeftX}%</td>

                <td>
                  <div className="slidecontainer">
                    <input
                      type="range"
                      min="0"
                      max="100"
                      className="slider"
                      id="myRange11"
                      defaultValue={this.state.bottomLeftY}
                      onChange={(event) =>
                        this.handleSlide("bottom-left-y", event.target.value)
                      }
                    />
                  </div>
                </td>
                <td>{this.state.bottomLeftY}%</td>
              </tr>
              <tr>
                <td>Bottom Right</td>
                <td>
                  <div className="slidecontainer">
                    <input
                      type="range"
                      min="0"
                      max="100"
                      className="slider"
                      id="myRange11"
                      defaultValue={this.state.bottomRightX}
                      onChange={(event) =>
                        this.handleSlide("bottom-right-x", event.target.value)
                      }
                    />
                  </div>
                </td>
                <td>{this.state.topRightX}%</td>

                <td>
                  <div className="slidecontainer">
                    <input
                      type="range"
                      min="0"
                      max="100"
                      className="slider"
                      id="myRange11"
                      defaultValue={this.state.bottomRightY}
                      onChange={(event) =>
                        this.handleSlide("bottom-right-y", event.target.value)
                      }
                    />
                  </div>
                </td>
                <td>{this.state.bottomRightY}%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Blob;

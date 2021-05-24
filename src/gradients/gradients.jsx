import React, { Component } from "react";
import { SketchPicker } from "react-color";
import Palette from "./Palette.jsx";
import "./gradients.css";
class Gradients extends Component {
  state = {
    bgColor1: "#FFE000",
    bgColor2: "#799F0C",
    bgColorPercent1: 0,
    bgColorPercent2: 100,
    radBgColorPercent1: 0,
    radBgColorPercent2: 80,
    deg: 90,
    isRadial: false,
    isModal: false,
    at: "",
    atPercent1: 50,
    atPercent2: 50,
  };
  removeModal = () => {
    this.setState({ isModal: false });
  };
  handleChange = (color1, color2) => {
    this.setState({ bgColor1: color1, bgColor2: color2, isRadial: false });
  };
  handleInvert = () => {
    var temp = this.state.bgColor1;
    this.setState({ bgColor1: this.state.bgColor2, bgColor2: temp });
  };
  render() {
    var linear =
      "linear-gradient(" +
      this.state.deg +
      "deg " +
      "," +
      this.state.bgColor1 +
      " " +
      this.state.bgColorPercent1 +
      "%," +
      this.state.bgColor2 +
      " " +
      this.state.bgColorPercent2 +
      "%" +
      ")";

    var radial =
      "radial-gradient(" +
      this.state.at +
      " at " +
      this.state.atPercent1 +
      "% " +
      this.state.atPercent2 +
      "%, " +
      this.state.bgColor1 +
      " " +
      this.state.radBgColorPercent1 +
      "%, " +
      this.state.bgColor2 +
      " " +
      this.state.radBgColorPercent2 +
      "% )";
    var grad = this.state.isRadial ? radial : linear;
    var result = "background: " + grad + " !important;";
    return (
      <React.Fragment>
        <div className="container-fluid bgBoard" style={{ background: grad }}>
          <div className="container">
            {this.state.isModal ? (
              <div className="text-center palettebg">
                <br />
                <Palette change={this.handleChange} />
                <br />
                <button
                  className="btn btn-outline-light"
                  style={{ marginBottom: "1px" }}
                  onClick={() => {
                    this.removeModal();
                  }}
                >
                  Close
                </button>
              </div>
            ) : (
              <table
                className="table table-borderless"
                style={{ marginTop: "20%" }}
              >
                <tbody>
                  <tr>
                    <td colSpan="3" className="text-center">
                      <div>
                        <div className="checkbox switcher">
                          <label>
                            <small>Linear </small>
                            <input
                              type="checkbox"
                              id="test"
                              value={this.state.isRadial}
                              onChange={(event) => {
                                this.setState({
                                  isRadial: !this.state.isRadial,
                                });
                                console.log(event.target.value);
                              }}
                            />
                            <span>
                              <small></small>
                            </span>
                            <small>Radial</small>
                          </label>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <SketchPicker
                        color={this.state.bgColor1}
                        onChange={(update) => {
                          this.setState({ bgColor1: update.hex });
                        }}
                      />
                    </td>
                    <td className="text-center">
                      {this.state.isRadial ? (
                        <React.Fragment>
                          <form className="form">
                            <select
                              class="form-control form-control-sm width-30 bottom-line bg-transparent"
                              onChange={(event) =>
                                this.setState({ at: event.target.value })
                              }
                            >
                              <option value="closest-side">Closest Side</option>
                              <option value="farthest-side">
                                Farthest Side
                              </option>
                              <option value="closest-corner">
                                Closest Corner
                              </option>
                              <option value="farthest-side">
                                Farthest Corner
                              </option>
                            </select>{" "}
                            at
                          </form>
                          <input
                            type="range"
                            min="0"
                            max="100"
                            className="slider width-30"
                            id="myRange11"
                            defaultValue={this.state.atPercent1}
                            onChange={(event) => {
                              this.setState({ atPercent1: event.target.value });
                            }}
                          />
                          {" " + this.state.atPercent1 + "%  &  "}
                          <input
                            type="range"
                            min="0"
                            max="100"
                            className="slider width-30"
                            id="myRange11"
                            defaultValue={this.state.atPercent2}
                            onChange={(event) => {
                              this.setState({ atPercent2: event.target.value });
                            }}
                          />
                          {this.state.atPercent2 + "%"}
                          <br />
                          Color 1 Position : {this.state.radBgColorPercent1}%
                          <br />
                          <input
                            type="range"
                            min="-100"
                            max="100"
                            className="slider"
                            id="myRange11"
                            defaultValue={this.state.radBgColorPercent1}
                            onChange={(event) => {
                              this.setState({
                                radBgColorPercent1: event.target.value,
                              });
                            }}
                          />
                          <br />
                          Color 2 Position : {this.state.radBgColorPercent2}%
                          <br />
                          <input
                            type="range"
                            min="-100"
                            max="100"
                            className="slider"
                            id="myRange11"
                            defaultValue={this.state.radBgColorPercent2}
                            onChange={(event) => {
                              this.setState({
                                radBgColorPercent2: event.target.value,
                              });
                            }}
                          />
                          <br />
                        </React.Fragment>
                      ) : (
                        <React.Fragment>
                          <u>
                            Direction at : <i>{" " + this.state.deg}°</i>
                          </u>
                          <br />
                          <input
                            type="range"
                            min="0"
                            max="360"
                            className="slider"
                            id="myRange11"
                            defaultValue={this.state.deg}
                            onChange={(event) => {
                              this.setState({ deg: event.target.value });
                            }}
                          />
                          <br />
                          <br />
                          Color 1 Position : {this.state.bgColorPercent1}%
                          <br />
                          <input
                            type="range"
                            min="-100"
                            max="100"
                            className="slider"
                            id="myRange11"
                            defaultValue={this.state.bgColorPercent1}
                            onChange={(event) => {
                              this.setState({
                                bgColorPercent1: event.target.value,
                              });
                            }}
                          />
                          <br />
                          Color 2 Position : {this.state.bgColorPercent2}%
                          <br />
                          <input
                            type="range"
                            min="-100"
                            max="100"
                            className="slider"
                            id="myRange11"
                            defaultValue={this.state.bgColorPercent2}
                            onChange={(event) => {
                              this.setState({
                                bgColorPercent2: event.target.value,
                              });
                            }}
                          />
                          <br />
                          <br />
                        </React.Fragment>
                      )}
                      <button
                        className="btn btn-light btn-md"
                        onClick={() => this.handleInvert()}
                      >
                        {"<<->>"}
                      </button>
                      {"  "}
                      <button
                        className="btn btn-warning btn-md"
                        onClick={() => navigator.clipboard.writeText(result)}
                      >
                        Copy to Clipboard
                      </button>
                      <br />
                      <br />
                      <button
                        className="btn btn-outline-light btn-sm"
                        type="button"
                        data-toggle="modal"
                        data-target="#exampleModalCenter"
                        onClick={() => {
                          this.setState({ isModal: true });
                        }}
                      >
                        Choose from available Palettes
                      </button>
                    </td>
                    <td style={{ float: "right" }}>
                      <SketchPicker
                        color={this.state.bgColor2}
                        onChange={(update) => {
                          this.setState({ bgColor2: update.hex });
                        }}
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            )}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Gradients;

import React, { Component } from "react";
import { SketchPicker } from "react-color";
import "./grid.css";

class Grid extends Component {
  state = {
    isgrad: false,
    isClick: false,
    deg: 90,
    bgColor: "#0000ff",
    bgColor1: "",
    bgColor2: "",
    bgColorPercent1: 0,
    bgColorPercent2: 100,
    range: 20,
    topLeftX: 0,
    topRightX: 0,
    bottomLeftX: 0,
    bottomRightX: 0,
    topLeftY: 0,
    topRightY: 0,
    bottomLeftY: 0,
    bottomRightY: 0,
  };

  handleGradient = (e, isTrue) => {
    console.log(e, isTrue);
    this.setState({ isgrad: isTrue });
    if (isTrue) {
      this.setState({
        bgColor1: this.state.bgColor,
        bgColor2: this.state.bgColor,
      });
    }
  };
  check = () => {
    var {
      range,
      topLeftX,
      topRightX,
      bottomLeftX,
      bottomRightX,
      topLeftY,
      topRightY,
      bottomLeftY,
      bottomRightY,
    } = this.props;

    if (this.state.range !== range) {
      this.setState({ range: this.props.range });
    }
    if (this.state.topLeftX !== topLeftX) {
      this.setState({ topLeftX });
    }
    if (this.state.topRightX !== topRightX) {
      this.setState({ topRightX });
    }
    if (this.state.bottomLeftX !== bottomLeftX) {
      this.setState({ bottomLeftX });
    }
    if (this.state.bottomRightX !== bottomRightX) {
      this.setState({ bottomRightX });
    }
    if (this.state.topLeftY !== topLeftY) {
      this.setState({ topLeftY });
    }
    if (this.state.topRightY !== topRightY) {
      this.setState({ topRightY });
    }
    if (this.state.bottomLeftY !== bottomLeftY) {
      this.setState({ bottomLeftY });
    }
    if (this.state.bottomRightY !== bottomRightY) {
      this.setState({ bottomRightY });
    }
  };
  handleClipboard = (result) => {
    navigator.clipboard.writeText(result);
    this.setState({ isClick: true });
  };
  render() {
    var radii =
      this.state.topLeftX +
      "% " +
      this.state.topRightX +
      "% " +
      this.state.bottomLeftX +
      "% " +
      this.state.bottomRightX +
      "%  /" +
      this.state.topLeftY +
      "% " +
      this.state.topRightY +
      "% " +
      this.state.bottomLeftY +
      "% " +
      this.state.bottomRightY +
      "% ";
    var bg =
      this.state.bgColor !== ""
        ? this.state.bgColor
        : "linear-gradient(" +
          this.state.deg +
          "deg " +
          "," +
          this.state.bgColor1 +
          " " +
          this.state.bgColorPercent1 +
          "%" +
          "," +
          this.state.bgColor2 +
          " " +
          this.state.bgColorPercent2 +
          "%" +
          ")";
    var result = "border-radius: " + radii + "; background: " + bg + ";";
    this.check();
    return (
      <div className="container  gridBorder">
        <table className="table">
          <tbody>
            <tr>
              <td rowSpan="3" width="500px" className="boxtd">
                <div
                  className="boxDiv"
                  onClick={() => this.handleClipboard(result)}
                  style={{
                    borderRadius: radii,
                    background: bg,
                  }}
                >
                  <h6>
                    <center>
                      Click on the box to
                      <br /> copy to clipboard
                    </center>
                  </h6>
                </div>
              </td>
              <td>
                <input
                  type="radio"
                  name="gradient"
                  value="0"
                  onChange={(event) =>
                    this.handleGradient(event.target.value, false)
                  }
                />{" "}
                Single Color
              </td>
              <td>
                <input
                  type="radio"
                  name="gradient"
                  value="1"
                  onChange={(event) =>
                    this.handleGradient(event.target.value, true)
                  }
                />{" "}
                Gradient Color
              </td>
            </tr>
            {this.state.isgrad ? (
              <React.Fragment>
                <tr className={this.state.isgrad ? "" : "hide"}>
                  <td className="boxtd1">
                    <SketchPicker
                      color={this.state.bgColor}
                      onChange={(update) => {
                        this.setState({ bgColor: "", bgColor1: update.hex });
                        console.log("Update  =>" + update.hex);
                        console.log("bgColor1 => " + this.state.bgColor1);
                      }}
                    />
                    <br />
                    Position
                    <br />
                    <input
                      type="range"
                      min="-100"
                      max="100"
                      className="slider"
                      id="myRange11"
                      defaultValue={this.state.bgColorPercent1}
                      onChange={(event) => {
                        this.setState({ bgColorPercent1: event.target.value });
                      }}
                    />
                    {this.state.bgColorPercent1}%
                    <br />
                  </td>
                  <td className="boxtd1">
                    <SketchPicker
                      color={this.state.bgColor}
                      onChange={(update) => {
                        this.setState({ bgColor: "", bgColor2: update.hex });
                        console.log("Update  =>" + update.hex);
                        console.log("bgColor2 => " + this.state.bgColor2);
                      }}
                    />
                    <br />
                    Position
                    <br />
                    <input
                      type="range"
                      min="-100"
                      max="100"
                      className="slider"
                      id="myRange11"
                      defaultValue={this.state.bgColorPercent2}
                      onChange={(event) => {
                        this.setState({ bgColorPercent2: event.target.value });
                      }}
                    />
                    {this.state.bgColorPercent2}%
                  </td>
                </tr>
                <tr>
                  <td colSpan="2">
                    Degree
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
                    {" " + this.state.deg}°
                  </td>
                </tr>
              </React.Fragment>
            ) : (
              <tr className={!this.state.isgrad ? "" : "hide"}>
                <td colSpan="2" className={!this.state.isgrad ? "" : "hide"}>
                  <SketchPicker
                    color={this.state.bgColor}
                    onChange={(update) => {
                      this.setState({
                        bgColor: update.hex,
                        bgColor1: "",
                        bgColor2: "",
                      });
                      console.log("Update  =>" + update.hex);
                      console.log("bgColor => " + this.state.bgColor);
                    }}
                  />
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Grid;

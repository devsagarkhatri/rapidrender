import React, { Component } from "react";
import { SketchPicker } from "react-color";
import SVGS from "./svgs";
import "./../../node_modules/bootstrap/dist/css/bootstrap.css";
import "./svg.css";

class SVG extends Component {
  state = {
    ids: [1, 2, 3, 4, 5, 6, 7, 8],
    height: 480,
    width: 480,
    color: "rgb(6,77,150)",
    bgColor: "rgb(14,42,71)",
    divHeight: 0,
    divWidth: 0,
  };

  handleColor = (update) => {
    var res =
      "rgb(" + update.rgb.r + "," + update.rgb.g + "," + update.rgb.b + ")";
    this.setState({ color: res });
  };

  handleBgColor = (update) => {
    var res =
      "rgb(" + update.rgb.r + "," + update.rgb.g + "," + update.rgb.b + ")";
    this.setState({ bgColor: res });
  };
  getDimensions = () => {
    var svg = document.getElementsByClassName("svgBoxId");
    var height = svg[0].clientHeight;
    var width = svg[0].clientWidth;
    this.setState({ divHeight: height, divWidth: width });
    console.log("height : " + height);
    console.log("width : " + width);
  };
  componentDidMount() {
    this.getDimensions();
    window.addEventListener("resize", this.getDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.getDimensions);
  }
  render() {
    return (
      <div className="container-fluid svg-no-scroll">
        <div className="container bg-dark full">
          <div className="col-sm-3 inline full bg-secondary ">
            <center>
              <form className="form">
                <br />
                <br />
                Height{" "}
                <select
                  className="form-control form-control-sm width-30 bottom-line bg-transparent"
                  onChange={(event) =>
                    this.setState({ height: event.target.value })
                  }
                >
                  <option value="480">480px</option>
                  <option value="720">720px</option>
                  <option value="1080">1080px</option>
                  <option value="1920">1920px</option>
                </select>
                <br />
                <br />
                Width{" "}
                <select
                  className="form-control form-control-sm width-30 bottom-line bg-transparent"
                  onChange={(event) =>
                    this.setState({ height: event.target.value })
                  }
                >
                  <option value="480">480px</option>
                  <option value="720">720px</option>
                  <option value="1080">1080px</option>
                  <option value="1920">1920px</option>
                </select>
                <br />
                <br />
              </form>
              <br />
              Foreground Color
              <SketchPicker
                color={this.state.color}
                onChange={(event) => this.handleColor(event)}
              />
              <br />
              Background Color
              <SketchPicker
                color={this.state.bgColor}
                onChange={(event) => this.handleBgColor(event)}
              />
              <br />
            </center>
          </div>
          <div className="svgtable inline full bg-dark bg-transparent">
            <center>
              <table className="table table-borderless ">
                <tbody>
                  {this.state.ids.map((id) => {
                    return (
                      <tr key={id}>
                        <td>
                          <div id="svgBoxId1" className="svgBox svgBoxId">
                            <SVGS
                              id={id}
                              color={this.state.color}
                              bgColor={this.state.bgColor}
                              boxHeight={this.state.divHeight}
                              boxWidth={this.state.divWidth}
                            />
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </center>
          </div>
        </div>
      </div>
    );
  }
}

export default SVG;

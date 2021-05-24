import React, { Component } from "react";
import "./../../node_modules/bootstrap/dist/css/bootstrap.css";
import paletteData from "./paletteData.json";
import "./palette.css";
class Palette extends Component {
  state = {
    paletteArray: [],
  };

  componentDidMount() {
    const palette = [];
    const width = 4;
    const height = Math.ceil(paletteData.length / width);
    for (let row = 0; row < height; row++) {
      const currentRow = paletteData.slice(row * width, (row + 1) * width);
      palette.push(currentRow);
    }
    // console.log(palette);
    this.setState({ paletteArray: palette });
  }
  handleChange(event, color1, color2) {
    console.log("color1 = " + color1 + ", color2 = " + color2);
    this.props.change(color1, color2);
  }

  render() {
    return (
      <div className="container-fluid bg-transparent scroll">
        <div className="container">
          <table className="table table-borderless">
            <tbody>
              {this.state.paletteArray.map((palette) => {
                return (
                  <tr key={this.state.paletteArray.indexOf(palette)}>
                    {palette.map((data) => {
                      return (
                        <td key={palette.indexOf(data)} className="text-center">
                          <button
                            className="btn btn-primary fullBtn"
                            onClick={(event) =>
                              this.handleChange(
                                event,
                                data.colors[0],
                                data.colors[1]
                              )
                            }
                            style={{
                              background:
                                "linear-gradient(90deg," +
                                data.colors[0] +
                                "," +
                                data.colors[1] +
                                ")",
                              border: 0,
                            }}
                          >
                            {"  "}
                          </button>
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Palette;

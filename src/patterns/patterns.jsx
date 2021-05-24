import React, { Component } from "react";
import { SliderPicker } from "react-color";
import "./../../node_modules/bootstrap/dist/css/bootstrap.css";
import "./../patterns/patterns.css";
class Patterns extends Component {
  state = {
    color: "#0760E7",
    bgColor: "#FFFAFA",
    r: 7,
    g: 96,
    b: 231,
    r1: 255,
    g1: 250,
    b1: 250,
    bgImage:
      "linear-gradient(90deg,grey,transparent,transparent,transparent,transparent,grey)",
    bgSize: "",
    bgPos: "",
  };

  handleColor = (update) => {
    this.setState({ color: update.hex });
    this.setState({ r: update.rgb.r, g: update.rgb.g, b: update.rgb.b });
  };

  handleBgColor = (update) => {
    this.setState({ bgColor: update.hex });
    this.setState({ r1: update.rgb.r, g1: update.rgb.g, b1: update.rgb.b });
  };
  handleClick = () => {
    var res =
      "background-color:" +
      this.state.bgColor +
      "; background-image:" +
      this.state.bgImage +
      ";background-size:" +
      this.state.bgSize +
      ";";
    if (this.state.bgPos !== "") {
      res = res + this.state.bgPos;
    }
    navigator.clipboard.writeText(res);
    console.log(res);
  };
  setBackground = (event, bgImage, bgSize, bgPos) => {
    this.setState({
      bgImage: bgImage,
      bgSize: bgSize,
      bgPos: bgPos,
    });
  };
  unsetBackground = (zero) => {
    this.setState({ bgImage: zero });
    this.setState({ bgSize: "" });
    this.setState({ bgPos: "" });
  };
  render() {
    var zero =
      "linear-gradient(90deg,grey,transparent,transparent,transparent,transparent,grey)";

    var zeroSize = "";

    var rgb = this.state.r + "," + this.state.g + "," + this.state.b;
    var one =
      "linear-gradient(90deg, transparent 50%," + this.state.color + " 50%)";
    var two =
      "linear-gradient(0deg,transparent 50%,rgba(" +
      rgb +
      ",0.5)" +
      " 50%), linear-gradient(90deg, transparent 50%,rgba(" +
      rgb +
      ",0.5)" +
      " 50%) ";
    var three =
      "linear-gradient(135deg," +
      this.state.color +
      " 25%, transparent 25%),linear-gradient(225deg," +
      this.state.color +
      " 25%, transparent 25%),linear-gradient(315deg, " +
      this.state.color +
      " 25%, transparent 25%),linear-gradient(45deg, " +
      this.state.color +
      " 25%, transparent 25%) ";
    var four =
      "repeating-linear-gradient(120deg, rgba(" +
      rgb +
      ",.4), rgba(" +
      rgb +
      ",.4) 1px, transparent 1px, transparent 60px), repeating-linear-gradient(60deg, rgba(" +
      rgb +
      ",.4), rgba(" +
      rgb +
      ",.4) 1px, transparent 1px, transparent 60px), linear-gradient(60deg, rgba(" +
      rgb +
      ",.4) 25%, transparent 25%, transparent 75%, rgba(" +
      rgb +
      ",.4) 75%, rgba(" +
      rgb +
      ",.4)), linear-gradient(120deg, rgba(" +
      rgb +
      ",.4) 25%, transparent 25%, transparent 75%, rgba(" +
      rgb +
      ",.4) 75%, rgba(" +
      rgb +
      ",.4))";
    var five =
      "linear-gradient(335deg, " +
      this.state.color +
      " 23px, transparent 23px),linear-gradient(155deg, " +
      this.state.color +
      " 23px, transparent 23px),linear-gradient(335deg, " +
      this.state.color +
      " 23px, transparent 23px), linear-gradient(155deg, " +
      this.state.color +
      " 23px, transparent 23px),linear-gradient(335deg, " +
      this.state.color +
      " 10px, transparent 10px), linear-gradient(155deg, " +
      this.state.color +
      " 10px, transparent 10px), linear-gradient(335deg, " +
      this.state.color +
      " 10px, transparent 10px),linear-gradient(155deg, " +
      this.state.color +
      " 10px, transparent 10px)";
    var six =
      "linear-gradient(335deg, " +
      this.state.color +
      " 23px, transparent 23px),linear-gradient(155deg, " +
      this.state.color +
      " 23px, transparent 23px),linear-gradient(335deg, " +
      this.state.color +
      " 23px, transparent 23px), linear-gradient(155deg, " +
      this.state.color +
      " 23px, transparent 23px),linear-gradient(335deg, " +
      this.state.color +
      " 10px, transparent 10px), linear-gradient(155deg, " +
      this.state.color +
      " 10px, transparent 10px), linear-gradient(335deg, " +
      this.state.color +
      " 10px, transparent 10px),linear-gradient(155deg, " +
      this.state.color +
      " 10px, transparent 10px)";
    var seven =
      "linear-gradient(135deg, transparent 21px, " +
      this.state.color +
      " 22px, " +
      this.state.color +
      " 24px, transparent 24px, transparent 67px, " +
      this.state.color +
      " 67px, " +
      this.state.color +
      " 69px, transparent 69px),linear-gradient(225deg, transparent 21px, " +
      this.state.color +
      " 22px, " +
      this.state.color +
      " 24px, transparent 24px, transparent 67px, " +
      this.state.color +
      " 67px, " +
      this.state.color +
      " 69px, transparent 69px)";
    var eight =
      "radial-gradient(" +
      this.state.color +
      " 9px, transparent 10px),repeating-radial-gradient(" +
      this.state.color +
      " 0, " +
      this.state.color +
      " 4px, transparent 5px, transparent 20px, " +
      this.state.color +
      " 21px, " +
      this.state.color +
      " 25px, transparent 26px, transparent 50px)";

    var nine =
      "linear-gradient(30deg, rgba(" +
      rgb +
      ",.4) 12%, transparent 12.5%, transparent 87%, rgba(" +
      rgb +
      ",.4) 87.5%, rgba(" +
      rgb +
      ",.4)), linear-gradient(150deg, rgba(" +
      rgb +
      ",.4) 12%, transparent 12.5%, transparent 87%, rgba(" +
      rgb +
      ",.4) 87.5%, rgba(" +
      rgb +
      ",.4)), linear-gradient(30deg, rgba(" +
      rgb +
      ",.4) 12%, transparent 12.5%, transparent 87%, rgba(" +
      rgb +
      ",.4) 87.5%, rgba(" +
      rgb +
      ",.4)), linear-gradient(150deg, rgba(" +
      rgb +
      ",.4) 12%, transparent 12.5%, transparent 87%, rgba(" +
      rgb +
      ",.4) 87.5%, rgba(" +
      rgb +
      ",.4)), linear-gradient(60deg, rgba(" +
      rgb +
      ",.6) 5%, transparent 30%, transparent 65%, rgba(" +
      rgb +
      ",.6) 100%, rgba(" +
      rgb +
      ",.6)), linear-gradient(60deg, rgba(" +
      rgb +
      ",.6) 5%, transparent 25.5%, transparent 65%, rgba(" +
      rgb +
      ",.6) 100%, rgba(" +
      rgb +
      ",.6))";
    var ten =
      "radial-gradient(closest-side, transparent 98%, rgba(" +
      rgb +
      ",.7) 99%),radial-gradient(closest-side, transparent 98%, rgba(" +
      rgb +
      ",.7) 99%)";
    var eleven =
      "radial-gradient(circle at 100% 150%, " +
      this.state.color +
      " 24%, white 24%, " +
      this.state.bgColor +
      " 28%, " +
      this.state.color +
      " 28%, " +
      this.state.color +
      " 36%, " +
      this.state.bgColor +
      " 36%, " +
      this.state.bgColor +
      " 40%, transparent 40%, transparent), radial-gradient(circle at 0    150%, " +
      this.state.color +
      " 24%, " +
      this.state.bgColor +
      " 24%, " +
      this.state.bgColor +
      " 28%, " +
      this.state.color +
      " 28%, " +
      this.state.color +
      " 36%, " +
      this.state.bgColor +
      " 36%, " +
      this.state.bgColor +
      " 40%, transparent 40%, transparent),  radial-gradient(circle at 50%  100%, " +
      this.state.bgColor +
      " 10%, " +
      this.state.color +
      " 10%, " +
      this.state.color +
      " 23%, " +
      this.state.bgColor +
      " 23%, " +
      this.state.bgColor +
      " 30%, " +
      this.state.color +
      " 30%, " +
      this.state.color +
      " 43%, " +
      this.state.bgColor +
      " 43%, " +
      this.state.bgColor +
      " 50%, " +
      this.state.color +
      " 50%, " +
      this.state.color +
      " 63%, " +
      this.state.bgColor +
      " 63%, " +
      this.state.bgColor +
      " 71%, transparent 71%, transparent),   radial-gradient(circle at 100% 50%, " +
      this.state.bgColor +
      " 5%, " +
      this.state.color +
      " 5%, " +
      this.state.color +
      " 15%, " +
      this.state.bgColor +
      " 15%, " +
      this.state.bgColor +
      " 20%, " +
      this.state.color +
      " 20%, " +
      this.state.color +
      " 29%, " +
      this.state.bgColor +
      " 35%, " +
      this.state.bgColor +
      " 30%, " +
      this.state.color +
      " 30%, " +
      this.state.color +
      " 44%, " +
      this.state.bgColor +
      " 44%, " +
      this.state.bgColor +
      " 49%, transparent 49%, transparent),   radial-gradient(circle at 0    50%, " +
      this.state.bgColor +
      " 5%, " +
      this.state.color +
      " 5%, " +
      this.state.color +
      " 15%, " +
      this.state.bgColor +
      " 15%, " +
      this.state.bgColor +
      " 20%, " +
      this.state.color +
      " 20%, " +
      this.state.color +
      " 29%, " +
      this.state.bgColor +
      " 29%, " +
      this.state.bgColor +
      " 34%, " +
      this.state.color +
      " 34%, " +
      this.state.color +
      " 44%, " +
      this.state.bgColor +
      " 44%, " +
      this.state.bgColor +
      " 49%, transparent 49%, transparent)";
    var twelve =
      "linear-gradient(" +
      this.state.color +
      " 2px, transparent 2px), linear-gradient(90deg, " +
      this.state.color +
      " 2px, transparent 2px), linear-gradient(rgba(" +
      rgb +
      ",.3) 1px, transparent 1px), linear-gradient(90deg, rgba(" +
      rgb +
      ",.3) 1px, transparent 1px)";
    var thirteen =
      "linear-gradient(335deg, rgba(" +
      rgb +
      ",.5) 23px, transparent 23px), linear-gradient(155deg, rgba(" +
      rgb +
      ",.9) 23px, transparent 23px), linear-gradient(335deg, rgba(" +
      rgb +
      ",.5) 23px, transparent 23px), linear-gradient(155deg, rgba(" +
      rgb +
      ",.9) 23px, transparent 23px)";
    var fourteen =
      "radial-gradient(" +
      this.state.color +
      " 15%, transparent 16%), radial-gradient(" +
      this.state.color +
      " 15%, transparent 16%)";
    var fifteen =
      "linear-gradient(45deg, transparent, transparent 35px, rgba(" +
      rgb +
      ",.5) 35px, rgba(" +
      rgb +
      ",.5) 70px), linear-gradient(45deg, transparent, transparent 35px, rgba(" +
      rgb +
      ",.5) 35px, rgba(" +
      rgb +
      ",.5) 70px)";
    var sixteen =
      "radial-gradient(closest-side, transparent 80%, rgba(" +
      rgb +
      ",.2) 99%),radial-gradient(farthest-side, transparent 98%, rgba(" +
      rgb +
      ",.5) 99%)";
    return (
      <div
        className="container-fluid"
        style={{
          backgroundImage: this.state.bgImage,
          backgroundSize: this.state.bgSize,
          backgroundColor:
            this.state.bgSize !== "" ? this.state.bgColor : "#FFFFFF",
          backgroundPosition: "",
        }}
      >
        <div
          className="container"
          style={{
            background:
              "linear-gradient(90deg,transparent 0%,rgb(255,255,255) 5%,rgb(255,255,255) 95%,transparent 100%)",
          }}
        >
          <table
            className="table table-borderless tableFixHead bg-transparent "
            style={{
              background: "linear-gradient(90deg,white,white)",
              // "linear-gradient(90deg,transparent 0%,rgb(255,255,255) 1.5%,rgb(255,255,255) 98.5%,transparent 100%)",
              marginLeft: "5px",
              marginRight: "5px",
              // borderEndStartRadius: "80px",
              // borderEndEndRadius: "80px",
            }}
          >
            <thead>
              <tr className="tableFixHead">
                <th colSpan="2">
                  Foreground Color
                  <center>
                    <SliderPicker
                      color={this.state.color}
                      onChange={(update) => this.handleColor(update)}
                    />
                  </center>
                </th>
                <th colSpan="2">
                  Background Color
                  <center>
                    <SliderPicker
                      color={this.state.bgColor}
                      onChange={(update) => this.handleBgColor(update)}
                    />
                  </center>
                </th>
              </tr>
            </thead>
          </table>
          <table
            className="table table-borderless .bg-primary"
            // style={{ marginLeft: "10px", marginRight: "10px" }}
          >
            <tbody>
              <tr>
                <td>
                  <center>
                    <div
                      className="box"
                      onMouseEnter={(event) =>
                        this.setBackground(event, one, "20px", "")
                      }
                      onMouseLeave={(event) => this.unsetBackground(zero)}
                      onClick={(event) => this.handleClick()}
                      style={{
                        backgroundColor: this.state.bgColor,
                        backgroundImage: one,
                        backgroundSize: "20px",
                      }}
                    ></div>
                  </center>
                </td>
                <td>
                  <center>
                    <div
                      className="box"
                      onMouseEnter={(event) =>
                        this.setBackground(event, two, "20px 20px", "")
                      }
                      onMouseLeave={(event) => this.unsetBackground(zero)}
                      onClick={(event) => this.handleClick()}
                      style={{
                        backgroundColor: this.state.bgColor,
                        backgroundImage: two,
                        backgroundSize: "20px 20px",
                      }}
                    ></div>
                  </center>
                </td>
              </tr>
              <tr>
                <td>
                  <center>
                    <div
                      className="box"
                      onMouseEnter={(event) =>
                        this.setBackground(event, three, "20px 20px", "")
                      }
                      onMouseLeave={(event) => this.unsetBackground(zero)}
                      onClick={(event) => this.handleClick()}
                      style={{
                        backgroundColor: this.state.bgColor,
                        backgroundImage: three,
                        backgroundSize: "20px 20px",
                      }}
                    ></div>
                  </center>
                </td>
                <td>
                  <center>
                    <div
                      className="box"
                      onMouseEnter={(event) =>
                        this.setBackground(event, four, "20px 20px", "")
                      }
                      onMouseLeave={(event) => this.unsetBackground(zero)}
                      onClick={(event) => this.handleClick()}
                      style={{
                        backgroundColor: this.state.bgColor,
                        backgroundImage: four,
                        backgroundSize: "20px 20px",
                      }}
                    ></div>
                  </center>
                </td>
              </tr>
              <tr>
                <td>
                  <center>
                    <div
                      className="box"
                      onMouseEnter={(event) =>
                        this.setBackground(
                          event,
                          five,
                          "100px 100px, 100px 100px, 50px 50px, 50px 50px",
                          ""
                        )
                      }
                      onMouseLeave={(event) => this.unsetBackground(zero)}
                      onClick={(event) => this.handleClick()}
                      style={{
                        backgroundColor: this.state.bgColor,
                        backgroundImage: five,
                        backgroundSize:
                          "100px 100px, 100px 100px, 50px 50px, 50px 50px",
                      }}
                    ></div>
                  </center>
                </td>
                <td>
                  <center>
                    <div
                      className="box"
                      onMouseEnter={(event) =>
                        this.setBackground(
                          event,
                          six,
                          "58px 58px",
                          "0px 2px, 4px 35px, 29px 31px, 33px 6px, 0px 36px, 4px 2px, 29px 6px, 33px 30px"
                        )
                      }
                      onMouseLeave={(event) => this.unsetBackground(zero)}
                      onClick={(event) => this.handleClick()}
                      style={{
                        backgroundColor: this.state.bgColor,
                        backgroundImage: six,
                        backgroundSize: "58px 58px",
                        backgroundPosition:
                          "0px 2px, 4px 35px, 29px 31px, 33px 6px, 0px 36px, 4px 2px, 29px 6px, 33px 30px",
                      }}
                    ></div>
                  </center>
                </td>
              </tr>
              <tr>
                <td>
                  <center>
                    <div
                      className="box"
                      onMouseEnter={(event) =>
                        this.setBackground(event, seven, "64px 128px", "")
                      }
                      onMouseLeave={(event) => this.unsetBackground(zero)}
                      onClick={(event) => this.handleClick()}
                      style={{
                        backgroundColor: this.state.bgColor,
                        backgroundImage: seven,
                        backgroundSize: "64px 128px",
                      }}
                    ></div>
                  </center>
                </td>
                <td>
                  <center>
                    <div
                      className="box"
                      onMouseEnter={(event) =>
                        this.setBackground(
                          event,
                          eight,
                          "30px 30px, 90px 90px",
                          ""
                        )
                      }
                      onMouseLeave={(event) => this.unsetBackground(zero)}
                      onClick={(event) => this.handleClick()}
                      style={{
                        backgroundColor: this.state.bgColor,
                        backgroundImage: eight,
                        backgroundSize: "30px 30px, 90px 90px",
                      }}
                    ></div>
                  </center>
                </td>
              </tr>
              <tr>
                <td>
                  <center>
                    <div
                      className="box"
                      onMouseEnter={(event) =>
                        this.setBackground(
                          event,
                          nine,
                          "80px 140px",
                          "0 0, 0 0, 40px 70px, 40px 70px, 0 0, 40px 70px"
                        )
                      }
                      onMouseLeave={(event) => this.unsetBackground(zero)}
                      onClick={(event) => this.handleClick()}
                      style={{
                        backgroundColor: this.state.bgColor,
                        backgroundImage: nine,
                        backgroundSize: "80px 140px",
                        backgroundRepeat: "repeat",
                        backgroundPosition:
                          "0 0, 0 0, 40px 70px, 40px 70px, 0 0, 40px 70px",
                      }}
                    ></div>
                  </center>
                </td>
                <td>
                  <center>
                    <div
                      className="box"
                      onMouseEnter={(event) =>
                        this.setBackground(
                          event,
                          ten,
                          "80px 80px",
                          "0 0, 40px 40px"
                        )
                      }
                      onMouseLeave={(event) => this.unsetBackground(zero)}
                      onClick={(event) => this.handleClick()}
                      style={{
                        backgroundColor: this.state.bgColor,
                        backgroundImage: ten,
                        backgroundSize: "80px 80px",
                        backgroundPosition: "0 0, 40px 40px",
                      }}
                    ></div>
                  </center>
                </td>
              </tr>
              <tr>
                <td>
                  <center>
                    <div
                      className="box"
                      onMouseEnter={(event) =>
                        this.setBackground(event, eleven, "100px 50px", "")
                      }
                      onMouseLeave={(event) => this.unsetBackground(zero)}
                      onClick={(event) => this.handleClick()}
                      style={{
                        backgroundColor: this.state.bgColor,
                        backgroundImage: eleven,
                        backgroundSize: "100px 50px",
                      }}
                    ></div>
                  </center>
                </td>
                <td>
                  <center>
                    <div
                      className="box"
                      onMouseEnter={(event) =>
                        this.setBackground(
                          event,
                          twelve,
                          "100px 100px, 100px 100px, 20px 20px, 20px 20px",
                          "-2px -2px, -2px -2px, -1px -1px, -1px -1px"
                        )
                      }
                      onMouseLeave={(event) => this.unsetBackground(zero)}
                      onClick={(event) => this.handleClick()}
                      style={{
                        backgroundColor: this.state.bgColor,
                        backgroundImage: twelve,
                        backgroundSize:
                          "100px 100px, 100px 100px, 20px 20px, 20px 20px",
                        backgroundPosition:
                          "-2px -2px, -2px -2px, -1px -1px, -1px -1px",
                      }}
                    ></div>
                  </center>
                </td>
              </tr>
              <tr>
                <td>
                  <center>
                    <div
                      className="box"
                      onMouseEnter={(event) =>
                        this.setBackground(
                          event,
                          thirteen,
                          "58px 58px",
                          "0px 2px, 4px 35px, 29px 31px, 34px 6px"
                        )
                      }
                      onMouseLeave={(event) => this.unsetBackground(zero)}
                      onClick={(event) => this.handleClick()}
                      style={{
                        backgroundColor: this.state.bgColor,
                        backgroundImage: thirteen,
                        backgroundSize: "58px 58px",
                        backgroundPosition:
                          "0px 2px, 4px 35px, 29px 31px, 34px 6px",
                      }}
                    ></div>
                  </center>
                </td>
                <td>
                  <center>
                    <div
                      className="box"
                      onMouseEnter={(event) =>
                        this.setBackground(
                          event,
                          fourteen,
                          "60px 60px",
                          "0 0, 30px 30px"
                        )
                      }
                      onMouseLeave={(event) => this.unsetBackground(zero)}
                      onClick={(event) => this.handleClick()}
                      style={{
                        backgroundColor: this.state.bgColor,
                        backgroundImage: fourteen,
                        backgroundSize: "60px 60px",
                        backgroundPosition: "0 0, 30px 30px",
                      }}
                    ></div>
                  </center>
                </td>
              </tr>
              <tr>
                <td>
                  <center>
                    <div
                      className="box"
                      onMouseEnter={(event) =>
                        this.setBackground(
                          event,
                          fifteen,
                          "35px 70px",
                          "35px 0px, 0px 35px"
                        )
                      }
                      onMouseLeave={(event) => this.unsetBackground(zero)}
                      onClick={(event) => this.handleClick()}
                      style={{
                        backgroundColor: this.state.bgColor,
                        backgroundImage: fifteen,
                        backgroundSize: "35px 70px",
                        backgroundPosition: "35px 0px, 0px 35px",
                      }}
                    ></div>
                  </center>
                </td>
                <td>
                  <center>
                    <div
                      className="box"
                      onMouseEnter={(event) =>
                        this.setBackground(
                          event,
                          sixteen,
                          "80px 80px",
                          "0 0, 40px 40px"
                        )
                      }
                      onMouseLeave={(event) => this.unsetBackground(zero)}
                      onClick={(event) => this.handleClick()}
                      style={{
                        backgroundColor: this.state.bgColor,
                        backgroundImage: sixteen,
                        backgroundSize: "80px 80px",
                        backgroundPosition: "0 0, 40px 40px",
                      }}
                    ></div>
                  </center>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Patterns;

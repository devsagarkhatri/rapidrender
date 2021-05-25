import React, { Component } from "react";
import "./../../node_modules/bootstrap/dist/css/bootstrap.css";
import "./home.css";
import workingLate from "./../components/images/undraw_developer_activity_bv83.svg";
import wave from "./../components/images/wave.svg";
import blob from "./../components/images/undraw_art_museum_8or4.svg";
import fast from "./../components/images/undraw_working_late_pukg.svg";
import custom from "./../components/images/undraw_palette_110c.svg";
import clipboard from "./../components/images/undraw_ideas_flow_cy7b.svg";
class Home extends Component {
  state = {};
  render() {
    return (
      <div className="container-fluid">
        <div className="container ">
          <div
            className="row align-items-md-stretch mt-0 mb-5"
            style={{
              background: "#F0F0FF",
              backgroundImage: "url(" + wave + ")",
              backgroundPosition: "bottom",
              backgroundSize: "100%",
              backgroundRepeat: "no-repeat",
              height: "40rem",
            }}
          >
            <div className="p-5 mt-auto mb-auto  rounded-5 col-sm-6">
              <h1 className="display-6 fw-bold">Welcome Aboard! </h1>
              <div className=" py-">
                Create beautifully designed background templates using React.js
                with RapidRender!
              </div>
            </div>

            <div
              className="p-0 mt-auto mb-auto  rounded-5 col-sm-6 "
              style={{ float: "left" }}
            >
              <img src={workingLate} className="svgImg" alt="main navlogo" />
            </div>
          </div>
          <br />

          <div className="row align-items-md-stretch mt-1 mb-5">
            <div className="p-5 mb-4  text-center col-sm-12">
              <h1 className="display-7 fw-bold">What Do We Do?</h1>
              <div className="container-fluid px-5 blockquote">
                We let you contrive backgrounds shades, patterns and gradients
                for your next big project !
              </div>
            </div>
          </div>
          <br />
          <div className="row align-items-md-stretch mt-1 mb-1">
            <div className="p-5 mb-0  text-center col-sm-12">
              <h1 className="display-7 fw-bold">Why choose us?</h1>
              <div className="container-fluid px-5">Let's Discuss!</div>
            </div>
          </div>
          <br />
          <div className="row align-items-md-stretch ">
            <div className="p-5 mt-auto mb-auto  rounded-5 col-sm-6">
              <h1 className="display-6 fw-bold">Lot of options </h1>
              <div className=" py-">
                Choose between simple, gradient, pattern and SVG modes to create
                beautifully designed background templates using React.js with
                RapidRender!
              </div>
            </div>

            <div
              className="p-0 mt-auto mb-auto  rounded-5 col-sm-6 "
              style={{ float: "right" }}
            >
              <img src={blob} className="svgImg right" alt="Lot of options" />
            </div>
          </div>
          <br />
          <div className="row align-items-md-stretch ">
            <div className="p-0 mt-auto mb-auto right col-sm-6 ">
              <img src={fast} className="svgImg" alt="For turbo developers" />
            </div>

            <div
              className="p-5 mt-auto mb-auto  left rounded-5 col-sm-6"
              style={{ float: "right" }}
            >
              <h1 className="display-7 fw-bold">For turbo developers </h1>
              <div className=" py-">
                Don't have much time left for the presentation ? Don't worry, We
                got it covered with lots of predefined palettes to choose from.
              </div>
            </div>
          </div>
          <br />
          <div className="row align-items-md-stretch ">
            <div className="p-5 mt-auto mb-auto  rounded-5 col-sm-6">
              <h1 className="display-6 fw-bold">
                May the force be with you !{" "}
              </h1>
              <div className=" py-">
                At RapidRender, we give the users most customization options and
                let you beautifully apply your creativity.
              </div>
            </div>

            <div
              className="p-0 mt-auto mb-auto  rounded-5 col-sm-6 "
              style={{ float: "right" }}
            >
              <img
                src={custom}
                className="svgImg right"
                alt="May the force be with you"
              />
            </div>
          </div>
          <br />
          <div className="row align-items-md-stretch ">
            <div className="p-0 mt-auto mb-auto right col-sm-6 ">
              <img
                src={clipboard}
                className="svgImg"
                alt="No extra disk space"
              />
            </div>

            <div
              className="p-5 mt-auto mb-auto  left rounded-5 col-sm-6"
              style={{ float: "right" }}
            >
              <h1 className="display-6 fw-bold">No extra disk space ! </h1>
              <div className=" py-">
                Once you're done with your background, it can be easily copied
                in you clipboard to be used in a css/svg file. This saves your
                computer's disk space !
              </div>
            </div>
            <div className="row align-items-md-stretch mt-5 mb-5">
              <div className="p-5 mb-0  text-center col-sm-12">
                <h1 className="display-7 fw-bold">Like What Do We Do?</h1>
                <div className="container-fluid px-5 blockquote">
                  We recommend you to visit my personal landing page{" "}
                  <a href="https://devsagarkhatri.github.io/">here.</a>
                </div>
              </div>
            </div>
            <br />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;

import React from "react";
import Doughnut from "./Doughnut";
import Bar from "./Bar";
import "./Home.css";
// import winclogo from "../img/winclogo.png";

const Home = props => {
  // console.log(props);
  return (
    <div className="home-main">
      <div className="home-left_container">
        <div className="buttons-container">
          <button>Sort by dinges</button>
          <button>Sort by whatever</button>
          <button>Sort by this dan</button>
          <button>Sort by this dan</button>
        </div>
        <div className="home-feature_container">
          <div className="home-donut_container">
            <Doughnut dataSet={props.homeDataSet} />
          </div>
          <img src="/img/winclogo.png" alt="winclogo" />
        </div>
      </div>
      <div className="home-chart_container">
        <label>
          <input
            type="checkbox"
            name="homeMoeilijkChecked"
            onChange={props.handleChange}
            checked={props.homeMoeilijkChecked}
            onClick={props.handleClickHomeMoeilijkCheckbox}
          />
          Moeilijk
        </label>
        <label>
          <input
            type="checkbox"
            name="homeLeukChecked"
            onChange={props.handleChange}
            checked={props.homeLeukChecked}
            onClick={props.handleClickHomeLeukCheckbox}
          />
          Leuk
        </label>
        <Bar
          homeBarTitle={props.homeBarTitle}
          xAxisLabels={props.xAxisLabels}
          dataSet1Data={props.homeDataSet1Data}
          dataSet2Data={props.homeDataSet2Data}
        />
      </div>
    </div>
  );
};

export default Home;

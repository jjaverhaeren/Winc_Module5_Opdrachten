import React from "react";
import Doughnut from "./Doughnut";
import Chart from "./Bar";
import "./Home.css";
import winclogo from "../img/winclogo.png";

const Home = props => {
  return (
    <div className="main">
      <div className="left_container">
        <h3>Home</h3>
        <div className="buttons-container">
          <button>Sort by dinges</button>
          <button>Sort by whatever</button>
          <button>Sort by this dan</button>
          <button>Sort by this dan</button>
        </div>
        <div className="feature_container">
          <div className="home_donut-container">
            <Doughnut dataSet={props.dataSet} />
          </div>
          <img src={winclogo} alt="winc image" />
        </div>
      </div>
      <div className="chart_container">
        <label>
          <input
            type="checkbox"
            name="moeilijk"
            onChange={props.moeilijkCheckedOnChange}
            checked={props.moeilijkChecked}
          />
          Moeilijk
        </label>
        <label>
          <input
            type="checkbox"
            name="leuk"
            onChange={props.leukCheckedOnChange}
            checked={props.leukChecked}
          />
          Leuk
        </label>
        <Chart
          xAxisLabels={props.xAxisLabels}
          dataSet1Data={props.dataSet1Data}
          dataSet2Data={props.dataSet2Data}
        />
      </div>
    </div>
  );
};

export default Home;

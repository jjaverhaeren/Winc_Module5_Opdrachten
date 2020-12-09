import React from "react";
import Chart from "./Bar";
import "./Home.css";

const Home = props => {
  return (
    <div className="main">
      <div className="left_container">
        <h3>Home</h3>
        
      </div>
      <div className="chart_container">
      <label>
          <input type="checkbox" name="name" value="value" checked={true} />
          Moeilijk
        </label>
        <label>
          <input type="checkbox" name="name" value="value" checked={true} />
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

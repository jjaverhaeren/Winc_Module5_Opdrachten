import React from "react";
import Chart from "./Bar";


const Home = props => {
  return (
    <div>
      <h3>Home</h3>
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
  );
};

export default Home;

import React, { useState } from "react";
import { Doughnut } from "react-chartjs-2";

const Chart = props => {
  const [data, setData] = useState({
    labels: [
      "Gemiddeld Moeilijk Alle opdrachten",
      "Gemiddeld Leuk Alle Opdrachten",
    ],
    datasets: [
      {
        data: props.dataSet,
        backgroundColor: ["rgba(238, 3, 23,  0.8)", "rgb(255, 208, 0)"],
        borderWidth: 1,
        hoverBorderWidth: 1,
        hoverBorderColor: "rgba(209, 1, 1, 0.863)",
      },
    ],
  });

  const [options, setOptions] = useState({
    maintainAspectRatio: false,
    legend: {
      display: false,
    },
    cutoutPercentage: 63,
  });

  return (
    <div className="donut_container">
      <Doughnut className="donut" data={data} options={options} />
    </div>
  );
};

export default Chart;

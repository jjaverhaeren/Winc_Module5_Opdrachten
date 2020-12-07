import React, { useState } from "react";
import { Bar, Line, Doughnut } from "react-chartjs-2";
import students from "../data/utils";

function Chart({ xAxisLabels, dataSet1Data, dataSet2Data }) {
    

  const [data, setData] = useState({
    labels: xAxisLabels,
    datasets: [
      {
        label: "Moeilijk",
        data: dataSet1Data,
        backgroundColor: "rgba(255, 0, 0, 0.863)",

        borderWidth: 1,
        hoverBorderWidth: 1,
        hoverBorderColor: "rgba(209, 1, 1, 0.863)",
        scaleLabel: "Hatsieflatsie",
      },
      {
        label: "Leuk",
        data: dataSet2Data,
        backgroundColor: "rgb(1, 91, 209)",
        borderWidth: 1,
        hoverBorderWidth: 1,
        hoverBorderColor: "rgb(1, 72, 163)",
      },
    ],
  });

  const [options, setOptions] = useState({
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  });

  return (
    <div className="chart">
      <Bar className="nut" data={data} options={options} />
    </div>
  );
}

export default Chart;

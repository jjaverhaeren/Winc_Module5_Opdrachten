import React, { useState, useContext } from "react";
import { Bar, Doughnut } from "react-chartjs-2";

import Context from "../Context";

function Chart() {
  //   const distinctNames = [...new Set(students.map(rating => rating.Student))];
  const xAxisLabels = useContext(Context);

  const [data, setData] = useState({
    labels: xAxisLabels,
    datasets: [
      {
        label: "Moeilijk",
        data: [2, 2, 3, 2, 4, 3, 5, 4, 3, 5, 1],
        backgroundColor: "lightgreen",

        borderWidth: 1,
        hoverBorderWidth: 3,
        hoverBorderColor: "gray",
        scaleLabel: "Hatsieflatsie",
      },
      {
        label: "Leuk",
        data: [5, 3, 4, 2, 5, 4, 2, 5, 4, 3, 2],
        backgroundColor: "red",

        borderWidth: 1,
        hoverBorderWidth: 3,
        hoverBorderColor: "gray",
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
      <Bar className="nut" data={data} options={options}/>
    </div>
  );
}

export default Chart;

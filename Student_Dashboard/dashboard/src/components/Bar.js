import React from "react";
import { Bar } from "react-chartjs-2";

const Chart = ({ BarTitle, xAxisLabels, dataSet1Data, dataSet2Data }) => {

  const data = {
    labels: xAxisLabels,
    datasets: [
      {
        label: "Moeilijk",
        data: dataSet1Data,
        backgroundColor: "rgba(238, 3, 23,  0.8)",

        borderWidth: 1,
        hoverBorderWidth: 1,
        hoverBorderColor: "rgba(209, 1, 1, 0.863)",
        scaleLabel: "Hatsieflatsie",
      },
      {
        label: "Leuk",
        data: dataSet2Data,
        backgroundColor: "rgb(255, 208, 0)",
        borderWidth: 1,
        hoverBorderWidth: 1,
        hoverBorderColor: "rgb(1, 72, 163)",
      },
    ],
  };

  const options = {
    title: {
      display: true,
      text: BarTitle,
      fontSize: 22,
      position: "top",
  },
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
            max: 5,
          },
        },
      ],
    },
  };

  return (
    <div className="chart">
      <Bar className="nut" data={data} options={options} />
    </div>
  );
};

export default Chart;

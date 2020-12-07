import React, { useState } from "react";
import { Bar, HorizontalBar, Doughnut } from "react-chartjs-2";
// import "./Chart.css";
import img from "./images/sas.jpeg";
import students from "../students";

function Chart() {
  const distinctNames = [...new Set(students.map(rating => rating.Student))];

  const cities = [
    "Boston",
    "Worcester",
    "Springfield",
    "Lowell",
    "Cambridge",
    "New Bedford",
  ];
  // const labels = [...new Set(ratings.map(rating => rating.Student))];

  const [data, setData] = useState({
    labels: distinctNames,
    datasets: [
      {
        label: "Population",
        data: [2, 2, 3, 2, 4, 3, 5, 4, 3, 5, 1],
        backgroundColor: [
          "lightgreen",
          "lightgreen",
          "lightgreen",
          "lightgreen",
          "lightgreen",
          "lightgreen",
          "lightgreen",
          "lightgreen",
          "lightgreen",
          "lightgreen",
        ],
        borderWidth: 1,
        hoverBorderWidth: 3,
        hoverBorderColor: "gray",
        scaleLabel: "Hatsieflatsie",
      },
      {
        label: "Extra Thingy",
        data: [5, 3, 4, 2, 5, 4, 2, 5, 4, 3, 2],
        backgroundColor: [
          "red",
          "red",
          "red",
          "red",
          "red",
          "red",
          "red",
          "red",
          "red",
          "red",
        ],
        borderWidth: 1,
        hoverBorderWidth: 3,
        hoverBorderColor: "gray",
      },
    ],
  });

  return (
    <div className="chart">
      <Doughnut
        className="nut"
        data={data}
        options={{
          legend: false,
          maintainAspectRatio: true,
          layout: { padding: 0 },
        }}
      />
    </div>
  );
}

export default Chart;

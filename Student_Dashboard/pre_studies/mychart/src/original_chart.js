let myChart = document.getElementById("myChart").getContext("2d");

Chart.defaults.global.defaultFontFamily = "lato";

let massPopChart = new Chart(myChart, {
  type: "doughnut",
  data: {
    labels: [
      "Boston",
      "Worcester",
      "Springfield",
      "Lowell",
      "Cambridge",
      "New Bedford",
    ],
    datasets: [
      {
        label: "Population",
        data: [617594, 282045, 153060, 106519, 95072, 94000],
        backgroundColor: [
          "red",
          "blue",
          "green",
          "pink",
          "lightblue",
          "purple",
        ],
        borderWidth: 1,
        hoverBorderWidth: 3,
        hoverBorderColor: "gray",
      },
    ],
  },
  options: {
    title: {
      display: true,
      text: "Largest Cities in Massachusettsf",
      fontSize: 25,
    },
    legend: {
      display: false,
      position: "right",
      labels: {
        fontColor: "black",
      },
    },
    layout: {
      padding: {
        left: 50,
        right: 0,
        bottom: 0,
        top: 0,
      },
    },
    tooltips: {
        enabled: true
    }
  },
});
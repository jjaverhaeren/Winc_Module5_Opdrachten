import React from "react";
import Doughnut from "./Doughnut";
import Bar from "./Bar";
import Select from "./Select";
import "./Home.css";

const Home = props => {
  let checkboxStyle;
  props.displayCheckBoxes === false
    ? (checkboxStyle = { display: "none" })
    : (checkboxStyle = { display: "inline" });

  return (
    <div className="home-main">
      <div className="home-left_container">
        <div className="home-title_container">
          <h3>Winc Academy</h3>
        </div>
        <div className="home-feature_container">
          <div className="home-donut_container">
            <Doughnut dataSet={props.homeDataSet} />
            <img className="home-logo" src="/img/winclogo.png" alt="winclogo" />
          </div>
        </div>
        <div className="buttons_container">
          <h3>Sorteer</h3>
          <button
            className="button-moeilijk"
            onClick={props.handleSortByMoeilijkHome}
          >
            Moeilijk
          </button>
          <button className="button-leuk" onClick={props.handleSortByLeukkHome}>
            Leuk
          </button>
          <button
            className="button-default"
            onClick={props.handleSortDefaultHome}
          >
            Standaard
          </button>
        </div>
      </div>
      <div className="home-chart_container">
        <label style={checkboxStyle}>
          <input
            type="checkbox"
            name="homeMoeilijkChecked"
            onChange={props.handleChange}
            checked={props.homeMoeilijkChecked}
            onClick={props.handleClickHomeMoeilijkCheckbox}
          />
          Moeilijk
        </label>
        <label style={checkboxStyle}>
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
          BarTitle={props.homeBarTitle}
          xAxisLabels={props.homeXAxisLabels}
          dataSet1Data={props.homeDataSet1Data}
          dataSet2Data={props.homeDataSet2Data}
        />
      </div>
      <div className="home-right_container">
        <div className="home-mode_container">
          <h3>Mode</h3>
          <label>
            <input
              value="single"
              type="radio"
              name="homeSingleMulti"
              onChange={props.handleChange}
              checked={props.homeSingleMulti === "single"}
            />
            Single
          </label>
          <label>
            <input
              value="multi"
              type="radio"
              name="homeSingleMulti"
              onChange={props.handleChange}
              checked={props.homeSingleMulti === "multi"}
            />
            Multi
          </label>
        </div>

        <div className="home-select_opdracht">
          <Select
            listData={props.opdrachtInfo}
            onChange={props.pickOpdrachtHome}
            innerHTML={props.chooseAOpdracht}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;

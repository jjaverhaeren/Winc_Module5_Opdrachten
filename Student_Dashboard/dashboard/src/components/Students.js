import React from "react";
import "./Students.css";
import Select from "./Select";
import Doughnut from "./Doughnut";
import Bar from "./Bar";

const Students = props => {
  let phone, email, age, imgUrl, checkboxStyle;
  props.studentInfo.forEach(student => {
    if (student.name === props.studentName) {
      phone = student.phone;
      email = student.email;
      age = student.age;
      imgUrl = student.studentImgUrl;
    }
  });

  props.displayCheckBoxes === false
    ? (checkboxStyle = { display: "none" })
    : (checkboxStyle = { display: "inline" });

  return (
    <div className="student-main">
      <div className="student-left_container">
        <div className="student-select_container">
          <Select
            listData={props.studentInfo}
            onChange={props.pickStudent}
            innerHTML={props.chooseAStudent}
          />
        </div>
        <div className="student-feature_container">
          <div className="student-info_container">
            <h3>naam: {props.studentName}</h3>
            <p>phone: {phone}</p>
            <p>email: {email}</p>
            <p>leeftijd: {age}</p>
          </div>
          <div className="student-donut_container">
            <Doughnut className="donut" dataSet={props.studentDataSet} />
          </div>
          <img src={imgUrl} alt="" />
        </div>
        <div className="student-list_container">
          <h3>Sorteer</h3>
          <button
            className="button-moeilijk"
            onClick={props.handleSortByMoeilijk}
          >
            Moeilijk
          </button>
          <button className="button-leuk" onClick={props.handleSortByLeuk}>
            Leuk
          </button>
          <button className="button-default" onClick={props.handleSortDefault}>
            Standaard
          </button>
        </div>
      </div>

      <div className="student-bar_container">
        <label style={checkboxStyle}>
          <input
            type="checkbox"
            name="studentMoeilijkChecked"
            onChange={props.handleChange}
            checked={props.studentMoeilijkChecked}
            onClick={props.handleClickStudentMoeilijkCheckbox}
          />
          Moeilijk
        </label>
        <label style={checkboxStyle}>
          <input
            type="checkbox"
            name="studentLeukChecked"
            onChange={props.handleChange}
            checked={props.studentLeukChecked}
            onClick={props.handleClickStudentLeukCheckbox}
          />
          Leuk
        </label>
        <Bar
          BarTitle={props.studentBarTitle}
          xAxisLabels={props.studentXAxisLabels}
          dataSet1Data={props.studentDataSet1Data}
          dataSet2Data={props.studentDataSet2Data}
        />
      </div>
      <div className="student-right_container">
        <div className="student-mode_container">
          <h3>Mode</h3>
          <label>
            <input
              value="single"
              type="radio"
              name="studentSingleMulti"
              onChange={props.handleChange}
              checked={props.studentSingleMulti === "single"}
            />
            Single
          </label>
          <label>
            <input
              value="multi"
              type="radio"
              name="studentSingleMulti"
              onChange={props.handleChange}
              checked={props.studentSingleMulti === "multi"}
            />
            Multi
          </label>
        </div>

        <div className="student-select_opdracht">
          <Select
            listData={props.opdrachtInfo}
            onChange={props.pickOpdrachtStudent}
            innerHTML={props.chooseAOpdracht}
          />
        </div>
      </div>
    </div>
  );
};

export default Students;

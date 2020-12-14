import React from "react";
import "./Students.css";
import Select from "./Select";
import Doughnut from "./Doughnut";
import Bar from "./Bar";

const Students = props => {
  // console.log(props.studentDataSet);
  let phone, email, age, imgUrl;
  props.studentInfo.forEach(student => {
    if (student.name === props.studentName) {
      phone = student.phone;
      email = student.email;
      age = student.age;
      imgUrl = student.studentImgUrl;
    }
  });

  return (
    <div className="main">
      <div className="left_container">
        <div className="list_container">
          <Select
            studentInfo={props.studentInfo}
            pickStudent={props.pickStudent}
          />
          <button onClick={props.handleSortByMoeilijk}>
            Sorteer op 'Moeilijk'
          </button>
          <button onClick={props.handleSortByLeuk}>Sorteer op 'Leuk'</button>
        </div>
        <div className="student_feature-container">
          <div className="student_info-container">
            <h3>naam: {props.studentName}</h3>
            <p>phone: {phone}</p>
            <p>email: {email}</p>
            <p>leeftijd: {age}</p>
          </div>
          <div className="student_donut-container">
            <Doughnut className="donut" dataSet={props.studentDataSet} />
          </div>
          <img src={imgUrl} alt="" />
        </div>
      </div>

      <div className="bar_container">
        <label>
          <input
            type="checkbox"
            name="studentMoeilijkChecked"
            onChange={props.handleChange}
            checked={props.studentMoeilijkChecked}
            onClick={props.handleClickStudentMoeilijkCheckbox}
          />
          Moeilijk
        </label>
        <label>
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
          xAxisLabels={props.xAxisLabels}
          dataSet1Data={props.studentDataSet1Data}
          dataSet2Data={props.studentDataSet2Data}
        />
      </div>
    </div>
  );
};

export default Students;

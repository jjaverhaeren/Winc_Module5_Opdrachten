import React from "react";
import "./Students.css";
import List from "./List";
import person3 from "../img/person3.jpg";
import person8 from "../img/person8.jpg";
import Doughnut from "./Doughnut";
import Bar from "./Bar";

const Students = props => {
  let phone, email, age;
  props.studentInfo.forEach(student => {
    if (student.name === props.studentName) {
      phone = student.phone;
      email = student.email;
      age = student.age;
    }
    // return [phone, email, age]
  });

  return (
    <div>
      <div className="list_container">
        select Student:
        <List className="list" studentInfo={props.studentInfo} />
      </div>
      <div className="student_feature-container">
        <div className="student_info-container">
          <h5>naam: {props.studentName}</h5>
          <p>phone: {phone}</p>
          <p>email: {email}</p>
          <p>leeftijd: {age}</p>
        </div>
        <div className="student_donut-container">
          <Doughnut className="donut" dataSet={props.dataSet} />
        </div>
        <img src={person3} alt="student image" />
      </div>
      <div className="bar-container">
        <Bar xAxisLabels={props.xAxisLabels}
                  dataSet1Data={props.dataSet1Data}
                  dataSet2Data={props.dataSet2Data}/>
      </div>
    </div>
  );
};

export default Students;

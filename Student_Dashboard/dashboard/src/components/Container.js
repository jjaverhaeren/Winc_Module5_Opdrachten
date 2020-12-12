import React, { Component, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import Students from "./Students";
import Nav from "./Nav";
import {
  students,
  getDataSet,
  distinctOpdrachtNames,
  studentInfo,
  getAveragesPerStudent,
} from "../data/utils";

const [dataSet1, dataSet2] = getDataSet();
const [studentName, dataSet] = getAveragesPerStudent("Evelyn");

class Container extends Component {
  constructor(props) {
    super();
    this.state = {
      xAxisLabels: distinctOpdrachtNames,
      dataSet1Data: dataSet1,
      dataSet2Data: dataSet2,
      studentName: studentName,
      dataSet: dataSet,
      moeilijkChecked: true,

      leukChecked: true,
    };
    // this.leukCheckedOnChange=this.leukCheckedOnChange.bind(this);
    // this.moeilijkCheckedOnChange=this.moeilijkCheckedOnChange.bind(this);
  }

  render() {
    return (
      <div>
        <Router>
          <div>
            <Nav />
            <Switch>
              <Route
                path="/"
                exact
                render={props => (
                  <Home
                    xAxisLabels={this.xAxisLabels}
                    dataSet1Data={this.dataSet1Data}
                    dataSet2Data={this.dataSet2Data}
                    studentName={this.studentName}
                    dataSet={this.dataSet}
                    // moeilijkCheckedOnChange={this.moeilijkCheckedOnChange}
                    moeilijkChecked={this.moeilijkChecked}
                    // leukCheckedOnChange={this.leukCheckedOnChange}
                    leukChecked={this.leukChecked}
                  />
                )}
              />
              <Route
                path="/students"
                render={props => (
                  <Students
                    studentInfo={studentInfo}
                    studentName={this.studentName}
                    dataSet={this.dataSet}
                    xAxisLabels={this.xAxisLabels}
                    dataSet1Data={this.dataSet1Data}
                    dataSet2Data={this.dataSet2Data}
                    // moeilijkCheckedOnChange={this.this.moeilijkCheckedOnChange}
                    moeilijkChecked={this.moeilijkChecked}
                    // leukCheckedOnChange={this.leukCheckedOnChange}
                    leukChecked={this.leukChecked}
                  />
                )}
              />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default Container;

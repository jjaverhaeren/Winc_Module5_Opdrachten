import React, { useState } from "react";
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

const Container = props => {
  const [xAxisLabels, setXAxisLabels] = useState(distinctOpdrachtNames);
  const [dataSet1Data, dataSet2Data] = getDataSet();
  const [studentName ,dataSet]= getAveragesPerStudent("Rahima");
  

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
                  xAxisLabels={xAxisLabels}
                  dataSet1Data={dataSet1Data}
                  dataSet2Data={dataSet2Data}
                />
              )}
            />
            <Route
              path="/students"
              render={props => (
                <Students
                  studentInfo={studentInfo}
                  studentName={studentName}
                  dataSet={dataSet}
                  xAxisLabels={xAxisLabels}
                  dataSet1Data={dataSet1Data}
                  dataSet2Data={dataSet2Data}
                />
              )}
            />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default Container;

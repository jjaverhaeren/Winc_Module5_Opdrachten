import React, { useState } from "react";
import {
  students,
  getAverage,
  getAveragesPerOpdracht,
  getDataSet,
  distinctOpdrachtNames,
  distinctStudentNames,
} from "../data/utils";
import Home from "./Home";
import Chart from "./Chart";

const Container = () => {
  const [xAxisLabels, setXAxisLabels] = useState(distinctOpdrachtNames);

  const [dataSet1Data,dataSet2Data] = getDataSet();


  return (
    <div>
      <Home />
      <Chart
        xAxisLabels={xAxisLabels}
        dataSet1Data={dataSet1Data}
        dataSet2Data={dataSet2Data}
      />
    </div>
  );
};

export default Container;

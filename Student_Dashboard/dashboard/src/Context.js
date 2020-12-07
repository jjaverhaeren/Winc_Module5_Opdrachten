import React, { useState, createContext } from "react";
import students from "./data/students";

export const Context = createContext();

export const Provider = props => {
  const xAxisLabels = [...new Set(students.map(rating => rating.Student))];

  return (
    <Context.Provider value={xAxisLabels}>{props.children}</Context.Provider>
  );
};

export default Context;

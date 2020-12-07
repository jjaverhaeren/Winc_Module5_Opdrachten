import React, { useState, useContext } from "react";
import { Context } from "../Context";

const Home = () => {
  const value = useContext(Context);
  return <h3>Home</h3>;
};

export default Home;

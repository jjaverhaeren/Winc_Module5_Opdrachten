import React from "react";

function Inputfield(props) {
  return (
    <form autoComplete="off" onSubmit={props.handleSubmit}>
      <input
        type="text"
        className="input_field"
        onChange={props.handleChangeInput}
        name="inputvalue"
        placeholder="new item"
        autoComplete="off"
      />
      <button className="add-button" type="submit">Add</button>
    </form>
  );
}

export default Inputfield;
